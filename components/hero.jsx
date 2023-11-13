"use client";
import React, { useRef } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated, useScroll } from "@react-spring/web";

function Hero() {
  const containerRef = useRef(null);
   
  const [springs, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    loop: true,

  }));
  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      console.log(scrollYProgress);
      api.start({})
    },
    immediate: true,
  });

  return (
    <div className="w-screen h-screen relative"  ref={containerRef}>
      <Canvas className="w-screen h-screen bg-black flex justify-center items-center">
        <Stars />
      </Canvas>
      <animated.div style={...springs}>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-extrabold text-8xl tracking-wide"
          style={{ opacity: scrollYProgress }}
        >
          Hero Section
        </div>
      </animated.div>
    </div>
  );
}

export default Hero;
