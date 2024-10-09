import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./MainPage.css";

const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2.0;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  /* const ref = useRef() */

  /*   useFrame((state,delta)=>{
    ref.current.rotation.x += delta 
    ref.current.rotation.y += delta * 2.0
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
 */
  return (
    <mesh position={position}>
      <sphereGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const MainPage = () => {
  return (
    <Canvas className="main-page-background">
      <directionalLight position={[0, 0, 2]} intensity={0.9} />
      <ambientLight intensity={0.6} />
      <group position={[0, 0, 0]}>
        <Cube position={[0, 0, 0]} size={[1.5, 1.5, 1.5]} color={"green"} />
        <Sphere position={[2, 2, 0]} size={[1, 1, 1]} color={"hotpink"} />
      </group>
    </Canvas>
  );
};

export default MainPage;
