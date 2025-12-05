"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./experience";

const Page = () => {
  return (
    <div id="canvas-container" className="canvas-fullscreen">
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  );
};

export default Page;
