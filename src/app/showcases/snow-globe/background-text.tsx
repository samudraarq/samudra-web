import { Text } from "@react-three/drei";

const BackgroundText = () => {
  return (
    <Text
      font="/fonts/FrederickatheGreat-Regular.woff"
      fontSize={1.5}
      position={[-3, 1, -2]}
      rotation-y={0.5}
      maxWidth={2}
      textAlign="center"
      color={"#000000"}
    >
      FROZEN WONDER
    </Text>
  );
};
export default BackgroundText;
