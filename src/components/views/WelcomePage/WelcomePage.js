import React, { useState, useEffect, useRef } from "react";
import "./WelcomePage.scss";
import * as THREE from "three";

export const WelcomePage = () => {
  const welcomeMessage = "Welcome!";
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 150;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    canvasRef.current.appendChild(renderer.domElement);

    const PARTICLE_COUNT = 150; // Same particle count to maintain density
    const particles = [];
    const group = new THREE.Group();

    const DEAD_ZONE_RADIUS = 50;
    const TRIANGLE_HEIGHT = 200;
    const TRIANGLE_BASE = 260;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      let x, y;
      let retries = 0;
      do {
        y = Math.random() * TRIANGLE_HEIGHT;
        const maxX = ((y / TRIANGLE_HEIGHT) * TRIANGLE_BASE) / 2;
        x = (Math.random() - 0.5) * 2 * maxX;
        y = y - TRIANGLE_HEIGHT / 2;
        retries++;
      } while (Math.sqrt(x * x + y * y) < DEAD_ZONE_RADIUS && retries < 10);

      // Increase spacing by making random distances larger
      const z = (Math.random() - 0.5) * 40;

      const geometry = new THREE.CircleGeometry(1.5, 3);
      const material = new THREE.MeshBasicMaterial({ color: "#ae00ff" });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.rotation.z = Math.PI;

      mesh.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
      };

      group.add(mesh);
      particles.push(mesh);
    }

    scene.add(group);

    const MAX_LINE_COUNT = PARTICLE_COUNT * 3;
    const linePositions = new Float32Array(MAX_LINE_COUNT * 6);
    const lineColors = new Float32Array(MAX_LINE_COUNT * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    function animate() {
      let ptr = 0;
      let cptr = 0;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        const v = p.userData.velocity;
        p.position.add(v);

        ["x", "y", "z"].forEach((axis) => {
          if (Math.abs(p.position[axis]) > 200) v[axis] = -v[axis];
        });

        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const p2 = particles[j];
          const dist = p.position.distanceTo(p2.position);

          // Shorten the lines by limiting their distance to avoid overlap with text
          const MAX_DIST = 80; // Maximum distance for lines to prevent overlap
          if (dist < MAX_DIST) {
            // Ensure smooth connections without randomization
            const opacity = 1 - dist / MAX_DIST;

            linePositions[ptr++] = p.position.x;
            linePositions[ptr++] = p.position.y;
            linePositions[ptr++] = p.position.z;
            linePositions[ptr++] = p2.position.x;
            linePositions[ptr++] = p2.position.y;
            linePositions[ptr++] = p2.position.z;

            for (let k = 0; k < 2; k++) {
              lineColors[cptr++] = 1.0 * opacity;
              lineColors[cptr++] = 1.0 * opacity;
              lineColors[cptr++] = 1.0 * opacity;
            }
          }
        }
      }

      lineGeometry.setDrawRange(0, ptr / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {showWelcomeMessage && (
        <div className="welcome-page-background">
          <div className="threejs-background" ref={canvasRef} />
          <div className="welcome-page-foreground">
            <h1 className="cool-text">{welcomeMessage}</h1>
          </div>
        </div>
      )}
    </>
  );
};
