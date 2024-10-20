import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import "./MainPage.css";
import { DirectionalLightHelper } from "three";
import { useControls } from "leva";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1.0 : 2.0;
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * speed;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered(true);
      }}
      onPointerLeave={() => setIsHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const Sphere = ({ position, size, color, hoveredColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  /* const ref = useRef() */

  /*   useFrame((state,delta)=>{
    ref.current.rotation.x += delta 
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
 */
  return (
    <mesh
      position={position}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered(true);
      }}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry />
      <meshStandardMaterial color={isHovered ? hoveredColor : color} />
    </mesh>
  );
};

const TorusKnot = ({ position, size }) => {
  const ref = useRef();

  const { color, radius } = useControls({
    color: "lightblue",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5,
    },
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...size]} />
      <MeshWobbleMaterial color={color} factor={1} speed={2} />
    </mesh>
  );
};

const MainContent = () => {
  const directionalLightRef = useRef();
  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 0.2,
      min: 0,
      max: 5,
      step: 0.1,
    },
  });
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[0, 0, 2]}
        intensity={lightIntensity}
        color={lightColor}
      />
      <ambientLight intensity={0.6} />
      <OrbitControls enableZoom={true} />
      <group position={[0, 0, 0]}>
        <Cube position={[0, 0, 0]} size={[1.5, 1.5, 1.5]} color={"green"} />
        <Sphere
          position={[2, 0, 0]}
          size={[1, 1, 1]}
          color={"grey"}
          hoveredColor={"green"}
        />
        <TorusKnot position={[-3, 0, 0]} size={[0.1, 1000, 50]} />
      </group>
    </>
  );
};

const MainPage = () => {
  return (
    <Canvas className="main-page-background">
      <MainContent />
    </Canvas>
  );
};

export default MainPage;
