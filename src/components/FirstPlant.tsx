import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FirstPlant = () => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 pr-8 flex flex-col justify-between h-auto md:h-[550px] space-y-6">
          <div className="order-1">
            <h2 className="text-5xl font-bold text-white">
              Take a closer look at <br /> our first plant
            </h2>
          </div>
          <div className="order-2 mt-6 md:mt-auto">
            <a
              href="https://r2.vidzflow.com/v/KuagvzoUPR_1080p_1732807499.mp4"
              className="bg-[#d0ff14] text-black rounded-full py-3 px-6 inline-flex items-center hover:bg-white hover:text-black transition duration-300"
            >
              Watch video
              <span className="ml-2 w-7 h-7 rounded-full bg-black inline-flex items-center justify-center">
                <FaArrowRight className="text-white w-5 h-5" />
              </span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 pl-8 md:border-l border-gray-700 mt-8 md:mt-0">
          <video
            src="https://r2.vidzflow.com/v/KuagvzoUPR_1080p_1732807499.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-[450px] md:h-[550px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPlant;
