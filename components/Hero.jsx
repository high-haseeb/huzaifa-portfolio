"use client";
import React from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/web";
import ScrollTrigger from "react-scroll-trigger";
import Image from "next/image";
import HeroPicture from "./HeroPicture";

function Hero() {
  const [springs, api] = useSpring(() => ({ opacity: 1 }));

  return (
    <div className="w-screen h-screen bg-black flex space-y-2 flex-col">
      <div className="uppercase text-center font-suisse text-[13rem] tracking-[-7.36667px] leading-[156.45px] text-white pt-4">
        Huzaifa<br/>
        FOLIO—23
      </div>
      <div className="flex space-x-1">
        {[...Array(Math.floor(window.innerWidth / (80)))].map(() => (<HeroPicture/>))}
      </div>
    </div>
  );
}

export default Hero;
