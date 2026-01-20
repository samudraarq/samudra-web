"use client";

import { Leva } from "leva";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => (
      <div className="canvas-fullscreen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    ),
  },
);

const Experience = dynamic(() => import("./experience"), {
  ssr: false,
});

const Page = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  return (
    <div id="canvas-container" className="canvas-fullscreen">
      <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
        <Experience canvasRef={canvasRef} />
      </Canvas>

      <canvas
        ref={canvasRef}
        width={128}
        height={128}
        className="fixed top-0 left-0 z-10 w-64 h-64"
      />

      <Leva collapsed={true} hidden={true} />
    </div>
  );
};

export default Page;
