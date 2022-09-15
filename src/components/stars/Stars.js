import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { angleToRadian } from "./angleToRadian";

export const AddStar = () => {
  return (
    <mesh
      // adding a star at a random positions
      position={[
        Math.random() * (6 - -6) + -6,
        Math.random() * (6 - -6) + -6,
        Math.random() * (6 - -6) + -6,
      ]}
    >
      <sphereGeometry args={[0.01, 32, 32]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

const Stars = () => {
  const orbitRef = useRef();

  useFrame((state) => {
    const { x, y } = state.mouse;

    // disable click and scoll movement
    orbitRef.current.enableZoom = false;
    orbitRef.current.enableRotation = false;
    orbitRef.current.enablePan = false;

    // allow frame to move when mouse is moving
    orbitRef.current.setAzimuthalAngle(-x * angleToRadian(45));
    orbitRef.current.setPolarAngle((y + 1) * angleToRadian(45));
  });

  const coords = new Array(2000).fill().map((i) => [Math.random() * 800 - 400]);
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls ref={orbitRef} />

      {/* maping 2000 stars */}
      {coords.map((i) => (
        <AddStar key={i} />
      ))}

      {/* ambinent light because we don't need any shadow */}
      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Stars;
