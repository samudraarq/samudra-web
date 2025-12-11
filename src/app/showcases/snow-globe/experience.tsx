import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { useControls } from "leva";
import SnowGlobe from "./snow-globe";
import Snows from "./snows";
import { Perf } from "r3f-perf";

const Experience = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { debug } = useControls("Snow Globe", {
    debug: false,
  });

  if (!mounted) return null;

  return (
    <>
      <Perf position="top-left" />

      <color attach="background" args={["#ffffff"]} />
      <Environment preset="sunset" />

      <OrbitControls />

      <Physics debug={debug} gravity={[0, -0.2, 0]}>
        <Snows />

        <Center>
          <SnowGlobe />
        </Center>
      </Physics>
    </>
  );
};
export default Experience;
