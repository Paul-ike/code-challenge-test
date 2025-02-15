"use client";

import React, { useState, useEffect, useRef } from "react";

const AnimatedLogos = () => {
  const logos = [
    "/images/image1.jpg",
    "/images/image2.png",
    "/images/image6.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image3.png",
    "/images/image7.png",
    "/images/image8.png",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [xOffsets, setXOffsets] = useState<number[]>([]);

  const logoWidth = 200;
  const animationSpeed = 0.5;

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const visibleLogos = Math.ceil(containerWidth / logoWidth) + 1;
    const repeatedLogos = Array(visibleLogos).fill(logos).flat();
    const initialOffsets = repeatedLogos.map((_, index) => index * logoWidth);

    setXOffsets(initialOffsets);
  }, []);

  useEffect(() => {
    if (xOffsets.length === 0) return;

    const interval = setInterval(() => {
      setXOffsets((prevOffsets) =>
        prevOffsets.map((offset) =>
          offset <= -logoWidth ? (prevOffsets.length - 1) * logoWidth : offset - animationSpeed
        )
      );
    }, 16);

    return () => clearInterval(interval);
  }, [xOffsets]);

  return (
    <div className="hidden md:block bg-black py-8 overflow-hidden">
      <div className="relative whitespace-nowrap" ref={containerRef}>
        {xOffsets.map((offset, index) => (
          <img
            key={index}
            src={logos[index % logos.length]}
            alt={`Logo ${index + 1}`}
            className="h-20 mx-4 inline-block"
            style={{ transform: `translateX(${offset}px)` }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogos;
