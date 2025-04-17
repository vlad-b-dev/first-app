import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Delaunator from "delaunator";
import { useTheme } from "../../../styles/ThemeContext";
import "./WelcomePage.scss";

export const WelcomePage = () => {
  const canvasRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { theme } = useTheme();

  // Handle viewport resize for mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize or re-initialize Three.js when mobile or theme changes
  useLayoutEffect(() => {
    const canvasContainer = canvasRef.current;
    if (!canvasContainer) return;

    // Clear any previous canvas
    while (canvasContainer.firstChild) {
      canvasContainer.removeChild(canvasContainer.firstChild);
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Read CSS variables from the actual container (inherits from body)
    const styles = getComputedStyle(canvasContainer);
    const dotColor =
      styles.getPropertyValue("--main-hover-color").trim() || "#00ffff";
    const lineColor =
      styles.getPropertyValue("--main-color").trim() || "#af53ff";

    // THREE.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(0, -50, 250);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    canvasContainer.appendChild(renderer.domElement);

    // Geometry preparation
    const BASE = 260;
    const HEIGHT = (Math.sqrt(3) / 2) * BASE;
    const A = new THREE.Vector3(-BASE / 2, HEIGHT / 2, 0);
    const B = new THREE.Vector3(BASE / 2, HEIGHT / 2, 0);
    const C = new THREE.Vector3(0, -HEIGHT / 2, 0);
    const centroid = new THREE.Vector3()
      .addVectors(A, B)
      .add(C)
      .divideScalar(3);
    const HOLE_SCALE = 0.5;
    const H0 = new THREE.Vector3()
      .copy(A)
      .sub(centroid)
      .multiplyScalar(HOLE_SCALE)
      .add(centroid);
    const H1 = new THREE.Vector3()
      .copy(B)
      .sub(centroid)
      .multiplyScalar(HOLE_SCALE)
      .add(centroid);
    const H2 = new THREE.Vector3()
      .copy(C)
      .sub(centroid)
      .multiplyScalar(HOLE_SCALE)
      .add(centroid);

    // Helper: point-in-triangle
    const inTri = (P, V0, V1, V2) => {
      const v0 = { x: V2.x - V0.x, y: V2.y - V0.y };
      const v1 = { x: V1.x - V0.x, y: V1.y - V0.y };
      const v2 = { x: P.x - V0.x, y: P.y - V0.y };
      const dot00 = v0.x * v0.x + v0.y * v0.y;
      const dot01 = v0.x * v1.x + v0.y * v1.y;
      const dot02 = v0.x * v2.x + v0.y * v2.y;
      const dot11 = v1.x * v1.x + v1.y * v1.y;
      const dot12 = v1.x * v2.x + v1.y * v2.y;
      const invDen = 1 / (dot00 * dot11 - dot01 * dot01);
      const u = (dot11 * dot02 - dot01 * dot12) * invDen;
      const v = (dot00 * dot12 - dot01 * dot02) * invDen;
      return u >= 0 && v >= 0 && u + v <= 1;
    };

    // Create random dots
    const COUNT = 80;
    const meshes = [];
    let attempts = 0;
    while (meshes.length < COUNT && attempts < COUNT * 10) {
      attempts++;
      let u = Math.random(),
        v = Math.random();
      if (u + v > 1) {
        u = 1 - u;
        v = 1 - v;
      }
      const P = new THREE.Vector3()
        .addScaledVector(A, 1 - u - v)
        .addScaledVector(B, u)
        .addScaledVector(C, v);
      P.x += (Math.random() - 0.5) * 6;
      P.y += (Math.random() - 0.5) * 6;
      P.z = (Math.random() - 0.5) * 80;
      if (inTri(P, H0, H1, H2)) continue;

      const dot = new THREE.Mesh(
        new THREE.CircleGeometry(2, 6),
        new THREE.MeshBasicMaterial({ color: dotColor })
      );
      dot.position.copy(P);
      dot.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.1
      );
      scene.add(dot);
      meshes.push(dot);
    }

    const root = new THREE.Group();
    root.position.y = isMobile ? -50 : -60;
    meshes.forEach((m) => root.add(m));
    scene.add(root);

    const lines = new THREE.LineSegments(
      new THREE.BufferGeometry(),
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true })
    );
    root.add(lines);

    // Animation
    const THRESH = 70;
    const SPEED = 1;
    let lastTime = performance.now();
    const animate = (time) => {
      const delta = (time - lastTime) * 0.001 * SPEED;
      lastTime = time;
      meshes.forEach((m) => {
        m.position.addScaledVector(m.userData.velocity, delta);
        if (m.position.x > BASE / 2 || m.position.x < -BASE / 2)
          m.userData.velocity.x *= -1;
        if (m.position.y > HEIGHT / 2 || m.position.y < -HEIGHT / 2)
          m.userData.velocity.y *= -1;
        if (m.position.z > 100 || m.position.z < -100)
          m.userData.velocity.z *= -1;
      });

      // Recompute Delaunay
      const coords = meshes.map((m) => [m.position.x, m.position.y]);
      const delaunay = Delaunator.from(coords);
      const positions = [];
      const colors = [];
      const c = new THREE.Color(lineColor);
      for (let i = 0; i < delaunay.triangles.length; i += 3) {
        const [i0, i1, i2] = [
          delaunay.triangles[i],
          delaunay.triangles[i + 1],
          delaunay.triangles[i + 2],
        ];
        const P0 = meshes[i0].position,
          P1 = meshes[i1].position,
          P2 = meshes[i2].position;
        const cx = (P0.x + P1.x + P2.x) / 3,
          cy = (P0.y + P1.y + P2.y) / 3;
        if (inTri({ x: cx, y: cy }, H0, H1, H2)) continue;
        [
          [P0, P1],
          [P1, P2],
          [P2, P0],
        ].forEach(([u, v]) => {
          const d = u.distanceTo(v);
          if (d < THRESH) {
            const alpha = 1 - d / THRESH;
            positions.push(u.x, u.y, u.z, v.x, v.y, v.z);
            for (let j = 0; j < 2; j++)
              colors.push(c.r * alpha, c.g * alpha, c.b * alpha);
          }
        });
      }
      lines.geometry.dispose();
      const geom = new THREE.BufferGeometry();
      geom.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(positions), 3)
      );
      geom.setAttribute(
        "color",
        new THREE.BufferAttribute(new Float32Array(colors), 3)
      );
      lines.geometry = geom;

      root.rotation.x += 0.001;
      root.rotation.y += 0.0012;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Resize handler
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      while (canvasContainer.firstChild)
        canvasContainer.removeChild(canvasContainer.firstChild);
    };
  }, [isMobile, theme]);

  return (
    <div className="welcome-page-background">
      <div className="threejs-background" ref={canvasRef} />
      <div className="welcome-page-foreground">
        <h1 className="cool-text text-start">Welcome to All-in!</h1>
      </div>
    </div>
  );
};
