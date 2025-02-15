"use client";

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ReinventCarbon = () => {
  return (
    <div style={{ backgroundColor: "#F2F0EC" }} className="py-24 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full lg:pr-8 flex flex-col justify-between h-auto lg:h-[550px] border-b lg:border-b-0 lg:border-r border-gray-300 pb-8 lg:pb-0">
          <h2 className="text-black text-5xl font-bold mb-6 lg:mb-0">Reinvent carbon with us</h2>
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/carbon1.jpg"
              alt="Lab Worker"
              className="w-80 sm:w-96 lg:w-64 h-auto rounded-3xl shadow-lg max-w-full"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:pl-8 flex flex-col justify-between h-auto lg:h-[550px] pt-8 lg:pt-0">
          <p className="text-gray-700 text-xl text-center lg:text-left mb-6 lg:mb-0">
            We partner with pioneering CO₂ users, project developers, engineers, and scientists around the world to turn historic carbon waste into new climate value.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#"
              className="bg-[#d0ff14] text-black rounded-full py-3 px-6 inline-flex items-center hover:bg-white hover:text-black transition duration-300"
            >
              Get in touch
              <span className="ml-2 w-7 h-7 rounded-full bg-black inline-flex items-center justify-center">
                <FaArrowRight className="text-white w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReinventCarbon;
