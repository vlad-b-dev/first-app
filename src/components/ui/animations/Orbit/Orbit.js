import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Orbit = React.memo(({ logoSrc, width = 50, height = 50 }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Set the renderer size based on viewport units (vw, vh)
    renderer.setSize(
      window.innerWidth * (width / 100),
      window.innerHeight * (height / 100)
    );
    renderer.setClearColor(0x000000, 0); // Set transparent background
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Adjust the camera's position based on new dimensions
    const camera = new THREE.PerspectiveCamera(
      45,
      (window.innerWidth * (width / 100)) /
        (window.innerHeight * (height / 100)),
      0.1,
      100
    );
    camera.position.z = 3;

    // Logo plane (ensure the logo is not affected by lighting)
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load(logoSrc);

    // Disable mipmaps to avoid quality loss
    logoTexture.minFilter = THREE.LinearFilter; // or THREE.NearestFilter if you prefer
    logoTexture.magFilter = THREE.LinearFilter; // or THREE.NearestFilter if you prefer
    logoTexture.generateMipmaps = false; // Disable mipmap generation

    const logoGeometry = new THREE.PlaneGeometry(2.5, 2.5);

    const logoMaterial = new THREE.MeshBasicMaterial({
      map: logoTexture,
      transparent: true, // This keeps transparency from the PNG
      opacity: 1, // Ensure full opacity if you want no fading
    });

    const logoPlane = new THREE.Mesh(logoGeometry, logoMaterial);

    scene.add(logoPlane);

    // Moon with 3D shading (independent from logo)
    const moonGeometry = new THREE.SphereGeometry(0.15, 32, 32); // High segments for smoothness

    const cssMainColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--main-color")
      .trim();
    const moonColor = cssMainColor
      ? new THREE.Color(cssMainColor)
      : new THREE.Color("#ffaa00"); // Default if color not found

    const moonMaterial = new THREE.MeshStandardMaterial({
      color: moonColor,
      roughness: 0.3,
      metalness: 0.5, // Slightly more metallic for better lighting interaction
    });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    // Add ambient light for general illumination
    /*     const ambientLight = new THREE.AmbientLight(0xffffff, 1.0); // Ambient light for overall lighting
    scene.add(ambientLight); */

    // Increase point light intensity and radius for moon illumination
    /*  const pointLight = new THREE.PointLight(0xffffff, 2, 1); // Intense point light
    pointLight.position.set(2, 2, 3); // Position the light to the side to add highlight
    scene.add(pointLight); */

    // Add directional light to simulate sunlight and add shadows for depth
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5); // Bright directional light
    directionalLight.position.set(5, 5, 5); // Position the light source for good shading
    scene.add(directionalLight);

    // Animation for vertical orbit
    let angle = 0;
    const radius = 1.8; // Increase radius for a wider orbit
    const verticalAmplitude = 0.4; // Vertical movement amplitude

    const animate = () => {
      requestAnimationFrame(animate);
      angle += 0.02;

      // Adjust moon's position for a more vertical orbit
      moon.position.x = radius * Math.cos(angle); // Larger x movement for a wider orbit
      moon.position.y = verticalAmplitude * Math.sin(angle); // Vertical movement
      moon.position.z = 0.5 * Math.sin(angle);

      renderer.render(scene, camera);
    };
    animate();

    // Resize the renderer when the window is resized
    const handleResize = () => {
      const newWidth = window.innerWidth * (width / 100);
      const newHeight = window.innerHeight * (height / 100);
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [logoSrc, width, height]);

  return (
    <div
      ref={mountRef}
      style={{
        width: `${width}vw`, // Set width in vw
        height: `${height}vh`, // Set height in vh
        pointerEvents: "none", // Disable interactions
        margin: "0 auto", // Center it horizontally
        padding: "0", // No padding
        display: "block", // Ensure div behaves as a block element, centered in parent
      }}
    />
  );
});

export default Orbit;
