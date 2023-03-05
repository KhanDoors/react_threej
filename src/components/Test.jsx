import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Color } from "three";

const Test = () => {
  return (
    <Container maxWidth="sm">
      <Canvas>
        <OrbitControls autoRotate="True" />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 2]} />
              <color attach="background" args={["pink"]} />
              <Text fontSize={1} color="#555">
                Hello
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
};

export default Test;
