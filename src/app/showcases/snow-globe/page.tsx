"use client";

import { Leva } from "leva";
import dynamic from "next/dynamic";

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
  return (
    <div id="canvas-container" className="canvas-fullscreen">
      <Canvas shadows camera={{ position: [3, 1, 10] }}>
        <Experience />
      </Canvas>

      <Leva collapsed={true} />
    </div>
  );
};

export default Page;
