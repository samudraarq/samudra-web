import { OrbitControls, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";
import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";

// Shader Material - Particles
const ParticlesMaterial = shaderMaterial(
  {
    uResolution: new THREE.Vector2(),
  },
  vertexShader,
  fragmentShader,
);

type ParticlesMaterialType = THREE.ShaderMaterial & {
  uResolution: THREE.Vector2;
  // uPictureTexture: THREE.Texture | null;
  // uDisplacementTexture: THREE.Texture | null;
};

const PartMaterial = extend(ParticlesMaterial);

const Experience = () => {
  const particlesMaterialRef = useRef<ParticlesMaterialType>(null!);
  const resolutionRef = useRef(new THREE.Vector2());

  useFrame((state) => {
    // Particles - Update resolution every frame, in case of window resize
    resolutionRef.current.set(
      state.size.width * state.viewport.dpr,
      state.size.height * state.viewport.dpr,
    );
    particlesMaterialRef.current.uResolution = resolutionRef.current;
  });
  return (
    <>
      <color attach="background" args={["#181818"]} />

      <OrbitControls />

      {/* Particles Plane */}
      <points>
        <planeGeometry args={[10, 10, 128, 128]} />
        <PartMaterial
          key={vertexShader + fragmentShader}
          ref={particlesMaterialRef}
        />
      </points>
    </>
  );
};
export default Experience;
