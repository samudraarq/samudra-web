import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Environment, Lightformer } from "@react-three/drei";

interface EnvProps {
  perfSucks?: boolean;
}

function Env({ perfSucks = false }: EnvProps) {
  useFrame((state, delta) => {
    // Animate the camera
    if (!perfSucks) {
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 12,
          1.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9,
        ],
        0.5,
        delta,
      );
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <Environment
      frames={perfSucks ? 1 : Infinity}
      preset="city"
      resolution={256}
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
      <Lightformer
        intensity={3}
        rotation-y={-Math.PI / 2}
        position={[2, 2, 3]}
        scale={[50, 2, 1]}
        color="white"
      />
    </Environment>
  );
}

export default Env;
