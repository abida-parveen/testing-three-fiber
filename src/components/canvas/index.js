import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Stars from "../stars/Stars";

const Index = () => {
  return (
    <Canvas id="three_canvas_container">
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  );
};

export default Index;
