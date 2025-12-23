import { Center, ContactShadows, PerformanceMonitor } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { useControls } from "leva";
import SnowGlobe from "./snow-globe";
import Snows from "./snows";
import { Perf } from "r3f-perf";
import Env from "./env";

const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const [perfSucks, degrade] = useState(false);

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

      <PerformanceMonitor onDecline={() => degrade(true)} />

      <Physics debug={debug} gravity={[0, -0.2, 0]}>
        <Snows />

        <Center>
          <SnowGlobe />

          <ContactShadows
            frames={1}
            opacity={0.5}
            scale={30}
            resolution={256}
            color="#222222"
          />
        </Center>
      </Physics>
      <Env perfSucks={perfSucks} />
    </>
  );
};
export default Experience;
