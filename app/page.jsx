import Hero from "@/components/Hero";
import React from "react";

function Page() {
  return (
    <div>
      <Hero />
      <div className="bg-orange-500 w-screen h-screen">
        this is a placeholder text
      </div>
      <Hero />
    </div>
  );
}

export default Page;
