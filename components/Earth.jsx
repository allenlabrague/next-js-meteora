"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import { TextureLoader } from "three";
import { motion } from "framer-motion-3d";

const Earth = ({ image, position, direction }) => {
  const [texture] = useLoader(TextureLoader, [image]);

  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: position,
  });

  return (
    <>
      <Canvas ref={scene}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={direction} />
        <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={texture} />
        </motion.mesh>
      </Canvas>
    </>
  );
};

export default Earth;
