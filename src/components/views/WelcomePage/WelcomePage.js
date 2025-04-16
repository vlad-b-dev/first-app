import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./WelcomePage.scss";

export const WelcomePage = () => {
  const mountRef = useRef(null);
  const welcomeMessage = "Welcome!";
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const POINT_COUNT = 120;
    const DOT_COLOR = 0xff00ff;
    const LINE_COLOR = 0x00ffff;
    const dots = [];

    const triangleHeight = 100;
    const triangleBase = 160;

    // Triangle vertices
    const topLeft = new THREE.Vector3(-triangleBase / 2, triangleHeight / 2, 0);
    const topRight = new THREE.Vector3(triangleBase / 2, triangleHeight / 2, 0);
    const bottom = new THREE.Vector3(0, -triangleHeight / 2, 0);

    // Generate more points along the triangle edges and random inside
    const generateTrianglePoint = () => {
      const r = Math.random();
      const s = Math.random();
      if (r + s > 1) {
        return generateTrianglePoint();
      }
      const p = new THREE.Vector3()
        .addScaledVector(topLeft, 1 - r - s)
        .addScaledVector(topRight, r)
        .addScaledVector(bottom, s);
      return p;
    };

    for (let i = 0; i < POINT_COUNT; i++) {
      const pos = generateTrianglePoint();
      if (Math.abs(pos.x) < 25 && Math.abs(pos.y) < 25) continue; // avoid center
      dots.push({
        position: pos,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.15,
          (Math.random() - 0.5) * 0.15,
          0
        ),
      });
    }

    const dotGeometry = new THREE.BufferGeometry();
    const dotMaterial = new THREE.PointsMaterial({
      color: DOT_COLOR,
      size: 1.5,
    });

    const dotPositions = new Float32Array(dots.length * 3);
    dotGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(dotPositions, 3)
    );

    const dotMesh = new THREE.Points(dotGeometry, dotMaterial);
    scene.add(dotMesh);

    const lineMaterial = new THREE.LineBasicMaterial({ color: LINE_COLOR });
    const lineGeometry = new THREE.BufferGeometry();
    const maxConnections = 6;
    const linePositions = new Float32Array(
      dots.length * maxConnections * 3 * 2
    );
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    const animate = () => {
      for (let i = 0; i < dots.length; i++) {
        const p = dots[i].position;
        const v = dots[i].velocity;

        p.add(v);

        // keep within triangle bounds
        if (!isInsideTriangle(p)) {
          v.multiplyScalar(-1);
          p.add(v);
        }

        dotPositions[i * 3] = p.x;
        dotPositions[i * 3 + 1] = p.y;
        dotPositions[i * 3 + 2] = p.z;
      }

      // Update lines
      let lineIndex = 0;
      for (let i = 0; i < dots.length; i++) {
        let connections = 0;
        for (
          let j = i + 1;
          j < dots.length && connections < maxConnections;
          j++
        ) {
          const dist = dots[i].position.distanceTo(dots[j].position);
          if (dist < 28) {
            linePositions[lineIndex++] = dots[i].position.x;
            linePositions[lineIndex++] = dots[i].position.y;
            linePositions[lineIndex++] = dots[i].position.z;
            linePositions[lineIndex++] = dots[j].position.x;
            linePositions[lineIndex++] = dots[j].position.y;
            linePositions[lineIndex++] = dots[j].position.z;
            connections++;
          }
        }
      }
      lineGeometry.setDrawRange(0, lineIndex / 3);
      dotGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    function isInsideTriangle(p) {
      const A = topLeft,
        B = topRight,
        C = bottom;
      const v0 = new THREE.Vector3().subVectors(C, A);
      const v1 = new THREE.Vector3().subVectors(B, A);
      const v2 = new THREE.Vector3().subVectors(p, A);

      const dot00 = v0.dot(v0);
      const dot01 = v0.dot(v1);
      const dot02 = v0.dot(v2);
      const dot11 = v1.dot(v1);
      const dot12 = v1.dot(v2);

      const denom = dot00 * dot11 - dot01 * dot01;
      if (denom === 0) return false;

      const u = (dot11 * dot02 - dot01 * dot12) / denom;
      const v = (dot00 * dot12 - dot01 * dot02) / denom;

      return u >= 0 && v >= 0 && u + v <= 1;
    }

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="welcome-page-background">
      <div ref={mountRef} className="threejs-background" />
      <div className="welcome-page-foreground">
        {showWelcomeMessage && <h1 className="cool-text">{welcomeMessage}</h1>}
      </div>
    </div>
  );
};
