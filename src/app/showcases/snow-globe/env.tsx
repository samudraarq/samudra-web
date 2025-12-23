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
      background
      blur={0.8}
    >
      <Lightformer
        intensity={2}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={0.5}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[50, 2, 1]}
      />
      <Lightformer
        intensity={0.5}
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[50, 2, 1]}
      />
    </Environment>
  );
}

export default Env;
