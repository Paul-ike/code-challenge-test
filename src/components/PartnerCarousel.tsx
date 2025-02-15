"use client";

import React, { useState, useRef } from "react";

interface Partner {
  imageUrl: string;
  alt: string;
  link: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
}

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({ partners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const nextPartner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevPartner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 1 : prevIndex - 1
    );
  };

  const goToPartner = (index: number) => {
    setCurrentIndex(index);
  };

  const currentPartner = partners[currentIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = (x / rect.width) * 100;
    y = (y / rect.height) * 100;

    const padding = 20;
    const minX = padding;
    const maxX = 100 - padding;
    const minY = padding;
    const maxY = 100 - padding;

    x = Math.max(minX, Math.min(x, maxX));
    y = Math.max(minY, Math.min(y, maxY));

    setButtonPosition({ x, y });
  };

  return (
    <div className="relative bg-black py-8 flex flex-col justify-center items-center min-h-screen">
      <button
        className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-4 hover:bg-gray-700"
        onClick={prevPartner}
      >
        &lt;
      </button>

      <div
        className="relative flex justify-center items-center w-[80vw] max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <img
          src={currentPartner.imageUrl}
          alt={currentPartner.alt}
          className="w-[80vw] h-auto object-cover rounded-lg"
        />

        <a
          href={currentPartner.link}
          className={`absolute bg-[#d0ff14] bg-opacity-75 rounded-full w-24 h-24 flex items-center justify-center text-black font-bold text-lg transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${buttonPosition.x}%`,
            top: `${buttonPosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          View
        </a>
      </div>

      <button
        className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-4 hover:bg-gray-700"
        onClick={nextPartner}
      >
        &gt;
      </button>

      <div className="flex md:hidden mt-4 space-x-2">
        {partners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#d0ff14] scale-125" : "bg-gray-500"
            }`}
            onClick={() => goToPartner(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnerCarousel;
