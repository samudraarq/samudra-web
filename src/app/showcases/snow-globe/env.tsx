import { Environment, Lightformer } from "@react-three/drei";

function Env() {
  return (
    <Environment
      frames={1}
      preset="city"
      resolution={128}
      backgroundIntensity={1.2}
      background
      blur={0.8}
    >
      <Lightformer
        intensity={1}
        rotation-x={Math.PI / 2}
        position={[0, 6, -9]}
        scale={[10, 10, 1]}
        color="red"
      />
      <Lightformer
        intensity={2}
        rotation-y={Math.PI / 2}
        position={[-4, 1, -1]}
        scale={[50, 2, 1]}
        color="green"
      />
      <Lightformer
        intensity={1}
        rotation-y={-Math.PI / 2}
        position={[2, 1, 0]}
        scale={[50, 2, 1]}
        color="#ffe369"
      />
    </Environment>
  );
}

export default Env;
