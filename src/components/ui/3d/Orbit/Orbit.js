import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";

import "./Orbit.scss";

const Orbit = React.memo(({ logoSrc, width = 50, height = 50 }) => {
  const mountRef = useRef(null);
  const textureRef = useRef(null);
  const animationFrameRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!logoSrc || typeof logoSrc !== "string") {
      return;
    }

    const currentMount = mountRef.current;
    const parsedWidth = typeof width === "string" ? parseFloat(width) : width;
    const parsedHeight =
      typeof height === "string" ? parseFloat(height) : height;

    const scaleFactor = (isMobile ? 0.3 : 1) * 0.8;

    THREE.Cache.enabled = true;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const w = isMobile
      ? window.innerWidth * 0.9
      : window.innerWidth * (parsedWidth / 100);
    const h = isMobile
      ? window.innerHeight * 0.9
      : window.innerHeight * (parsedHeight / 100);

    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);

    if (currentMount && !currentMount.hasChildNodes()) {
      currentMount.appendChild(renderer.domElement);
    }

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 3;

    const moonGeometry = new THREE.SphereGeometry(0.15 * scaleFactor, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#6a6a6a"),
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    const light = new THREE.DirectionalLight(0xffffff, 2.5);
    light.position.set(5, 5, 5);
    scene.add(light);

    const createLogoMesh = (logoTexture) => {
      const img = logoTexture.image;
      if (!img?.complete) {
        img.onload = () => createLogoMesh(logoTexture);
        return;
      }
      const aspect =
        (img.naturalWidth || img.width) / (img.naturalHeight || img.height);
      const planeHeight = 2 * scaleFactor;
      const planeWidth = planeHeight * aspect;
      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      const material = new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    };

    const loadTexture = () => {
      if (textureRef.current) {
        const cloned = textureRef.current.clone();
        createLogoMesh(cloned);
      } else {
        const loader = new THREE.TextureLoader();
        loader.load(
          logoSrc,
          (tex) => {
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = false;
            textureRef.current = tex;
            createLogoMesh(tex);
          },
          undefined,
          (err) => {
            console.error("Failed to load logo texture", err);
          }
        );
      }
    };

    loadTexture();

    let angle = Math.random() * Math.PI * 2;
    const radius = 1.8 * scaleFactor;
    const verticalAmplitude = 0.6 * scaleFactor;
    const angleVariation = 0.02;

    const animate = () => {
      angle += angleVariation + (Math.random() * 0.01 - 0.01);
      moon.position.x = radius * Math.cos(angle);
      moon.position.y = verticalAmplitude * Math.sin(angle);
      moon.position.z = 1 * Math.sin(angle);
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResizeCanvas = () => {
      const newW = isMobile
        ? window.innerWidth * 0.9
        : window.innerWidth * (parsedWidth / 100);
      const newH = isMobile
        ? window.innerHeight * 0.9
        : window.innerHeight * (parsedHeight / 100);
      renderer.setSize(newW, newH);
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResizeCanvas);

    return () => {
      window.removeEventListener("resize", handleResizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
      THREE.Cache.clear();
      renderer.dispose();
      if (renderer.forceContextLoss) {
        renderer.forceContextLoss();
      }
      if (
        currentMount &&
        renderer.domElement &&
        currentMount.contains(renderer.domElement)
      ) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [logoSrc, width, height, isMobile]);

  let computedWidth = 90;
  if (!isMobile) {
    computedWidth = typeof width === "number" ? width : parseFloat(width);
  }
  computedWidth = computedWidth * 0.8;

  let computedHeight = 90;
  if (!isMobile) {
    computedHeight = typeof height === "number" ? height : parseFloat(height);
  }
  computedHeight = computedHeight * 0.8;

  return (
    <div
      className="orbit"
      ref={mountRef}
      style={{
        width: `${computedWidth}vw`,
        height: `${computedHeight}vh`,
        pointerEvents: "none",
        padding: "0",
        display: "block",
        margin: isMobile ? "0 0 0 5vw" : "-10vh auto -10vh auto",
        transform: `translate(-2%, -5%)`,
      }}
    />
  );
});

Orbit.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Orbit;
