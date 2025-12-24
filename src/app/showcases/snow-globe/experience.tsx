import { Center, ContactShadows, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { useControls } from "leva";
import SnowGlobe from "./snow-globe";
import Snows from "./snows";
import Env from "./env";
import BackgroundText from "./background-text";
// import { Perf } from "r3f-perf";

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
      <color attach="background" args={["#ffffff"]} />

      {/* <Perf position="top-left" /> */}

      <OrbitControls maxPolarAngle={Math.PI / 2 + 0.3} />

      <Physics debug={debug} gravity={[0, -0.2, 0]}>
        <group position={[1, 0, 0]}>
          <Snows />
        </group>

        <Center>
          <group position={[1, 0, 0]}>
            <SnowGlobe />
          </group>

          <ContactShadows
            frames={1}
            opacity={0.5}
            scale={30}
            resolution={256}
            color="#222222"
          />
        </Center>
      </Physics>

      <BackgroundText />

      <Env />
    </>
  );
};
export default Experience;
