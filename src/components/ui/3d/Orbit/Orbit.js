import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Orbit = React.memo(({ logoSrc, width = 50, height = 50 }) => {
  const mountRef = useRef(null);
  const textureRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!logoSrc || typeof logoSrc !== "string") {
      return;
    }

    const currentMount = mountRef.current;
    const parsedWidth = typeof width === "string" ? parseFloat(width) : width;
    const parsedHeight =
      typeof height === "string" ? parseFloat(height) : height;

    THREE.Cache.enabled = true;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const w = window.innerWidth * (parsedWidth / 100);
    const h = window.innerHeight * (parsedHeight / 100);
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);

    if (currentMount && !currentMount.hasChildNodes()) {
      currentMount.appendChild(renderer.domElement);
    }

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 3;

    const moonGeometry = new THREE.SphereGeometry(0.15, 32, 32);
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
      if (!img || !img.complete) {
        img.onload = () => createLogoMesh(logoTexture);
        return;
      }

      const aspect =
        (img.naturalWidth || img.width) / (img.naturalHeight || img.height);
      const planeHeight = 2;
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
    const radius = 1.8;
    const verticalAmplitude = 0.6;
    const angleVariation = 0.015;

    const animate = () => {
      angle += angleVariation + (Math.random() * 0.01 - 0.01);
      moon.position.x = radius * Math.cos(angle);
      moon.position.y = verticalAmplitude * Math.sin(angle);
      moon.position.z = 1 * Math.sin(angle);

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const newW = window.innerWidth * (parsedWidth / 100);
      const newH = window.innerHeight * (parsedHeight / 100);
      renderer.setSize(newW, newH);
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
  }, [logoSrc, width, height]);

  return (
    <div
      ref={mountRef}
      style={{
        width: `${typeof width === "number" ? width : parseFloat(width)}vw`,
        height: `${typeof height === "number" ? height : parseFloat(height)}vh`,
        pointerEvents: "none",
        padding: "0",
        display: "block",
        margin: "-5vh auto -5vh auto",
      }}
    />
  );
});

export default Orbit;
