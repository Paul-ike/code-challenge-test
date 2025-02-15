"use client";

import React from 'react';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#F2F0EC" }} className="pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/3 text-left mb-12 md:mb-0">
          <img
            src="/images/header1.png"
            alt="Mission Zero Logo"
            className="h-12"
          />
        </div>

        <div className="w-full md:w-2/3 text-left pb-32">
          <h2 className="text-6xl font-bold mb-12 text-black">
            The carbon <br /> narrative rewritten
          </h2>

          <div className="mb-12">
            <div className="w-full">
              <p className="text-black text-xl mb-4">Sign up to our newsletter</p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full py-3 px-6 w-64 text-gray-700 focus:outline-none mr-4"
                />
                <button className="bg-black text-white rounded-full py-3 px-8 hover:bg-gray-800 focus:outline-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <nav className="mb-8">
            <ul className="flex flex-col md:flex-row justify-between w-full">
              <li className="mb-4 md:mb-0">
                <a href="#" className="text-black hover:text-gray-900 text-xl">
                  Technology
                </a>
              </li>
              <li className="mb-4 md:mb-0">
                <a href="#" className="text-black hover:text-gray-900 text-xl">
                  About
                </a>
              </li>
              <li className="mb-4 md:mb-0">
                <a href="#" className="text-black hover:text-gray-900 text-xl">
                  Projects
                </a>
              </li>
              <li className="mb-4 md:mb-0">
                <a href="#" className="text-black hover:text-gray-900 text-xl">
                  Lab Notes
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-900 text-xl">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <div className="border-b border-gray-300 mb-8" />

          <div className="text-gray-600 flex flex-col md:flex-row justify-between items-center w-full">
            <p className="mb-2 text-black">Copyright Mission Zero Technologies 2025</p>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-black hover:text-gray-800 text-lg">
                Legal
              </a>
              <a href="#" className="text-black hover:text-gray-800 text-lg">
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-gray-800 text-lg">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative bg-[#d0ff14] w-[32rem] h-[16rem] rounded-t-full overflow-hidden" />
      </div>
    </footer>
  );
};

export default Footer;
