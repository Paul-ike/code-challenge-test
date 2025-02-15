import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative bg-black text-white h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center top-20">
        <div className="w-[32rem] h-[32rem] rounded-full overflow-hidden flex flex-col items-center justify-center">
          <video
            src="https://r2.vidzflow.com/v/dyEQLCzq4u_1080p_1707341914.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full object-cover"
          />
          <div className="absolute z-10 text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              We are <br /> reinventing carbon <br /> for a thriving planet
            </h1>
            <p className="text-sm md:text-lg mb-8">
              We develop technology to efficiently recover CO₂ <br /> from our atmosphere — anywhere, at any scale.
            </p>
            <Button text="Contact" href="#" bgColor="bg-transparent border border-white" textColor="text-white" hoverBg="hover:bg-white" hoverText="hover:text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
