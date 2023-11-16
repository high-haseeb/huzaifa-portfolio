"use client";
import React from "react";
import Image from "next/image";

function HeroPicture() {
  return (
    <div className="block text-white w-[80px] h-[110px]  relative">
      <Image
        className="border rounded-2xl"
        src={"/hero_pic.jpg"}
        alt="hero_pic"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default HeroPicture;
