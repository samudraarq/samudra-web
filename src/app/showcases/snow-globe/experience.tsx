import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import { useControls } from "leva";
import SnowGlobe from "./snow-globe";
import Snows from "./snows";

const Experience = () => {
  const { debug } = useControls("Snow Globe", {
    debug: false,
  });

  return (
    <>
      <color attach="background" args={["#ffffff"]} />
      <Environment preset="sunset" />

      <OrbitControls />

      <Suspense fallback={null}>
        <Physics debug={debug} gravity={[0, -0.3, 0]}>
          <Snows />
          <Center>
            <SnowGlobe />
          </Center>
        </Physics>
      </Suspense>
    </>
  );
};
export default Experience;
