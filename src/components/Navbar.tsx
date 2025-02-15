"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    
    

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white px-6 py-4 bg-black transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/hd1.png"
              alt="MissionZero"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-1 bg-[#2f3132] rounded-full opacity-80"></div>
          <div className="flex space-x-4 items-center relative z-10 px-6 py-2 flex-wrap justify-center">
            <Link href="#technology" className="hover:text-gray-300 px-2 py-1 rounded-full">
              Technology
            </Link>
            <Link href="#about" className="hover:text-gray-300 px-2 py-1 rounded-full">
              About
            </Link>
            <Link href="#projects" className="hover:text-gray-300 px-2 py-1 rounded-full">
              Projects
            </Link>
            <Link href="#lab-notes" className="hover:text-gray-300 px-2 py-1 rounded-full">
              Lab Notes
            </Link>
            <Link href="#careers" className="hover:text-gray-300 px-2 py-1 rounded-full">
              Careers
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <Button href="#contact" text="Contact" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" style={{ display: isOpen ? "none" : "block" }}>
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-between items-start"
          style={{ zIndex: 50 }}
        >
          <div className="md:hidden w-full flex justify-end">
            <button onClick={toggleMenu} className="text-white focus:outline-none p-4">
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-start pl-4">
            <Link href="#technology" className="block text-white py-1 hover:text-gray-300 text-3xl" onClick={toggleMenu}>
              Technology
            </Link>
            <Link href="#about" className="block text-white py-1 hover:text-gray-300 text-3xl" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#projects" className="block text-white py-1 hover:text-gray-300 text-3xl" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="#lab-notes" className="block text-white py-1 hover:text-gray-300 text-3xl" onClick={toggleMenu}>
              Lab Notes
            </Link>
            <Link href="#careers" className="block text-white py-1 hover:text-gray-300 text-3xl" onClick={toggleMenu}>
              Careers
            </Link>
          </div>
          <div className="pb-4 px-4">
            <Button href="#contact" text="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
