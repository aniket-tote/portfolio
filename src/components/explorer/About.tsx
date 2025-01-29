import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#193549] text-white">
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hey, I&apos;m Aniket
        </h1>
        <p className="text-xl md:text-2xl">I build things for the web</p>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative w-full max-w-md aspect-square">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Web developer working on laptop"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
