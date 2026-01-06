import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <color attach="background" args={["#ffffff"]} />

      <OrbitControls />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="orange" />
      </mesh>
    </>
  );
};
export default Experience;
