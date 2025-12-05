import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <color attach="background" args={["#87ceeb"]} />

      <OrbitControls />

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};
export default Experience;
