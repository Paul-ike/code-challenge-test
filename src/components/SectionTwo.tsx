import React from 'react';

const SectionTwo = () => {
  return (
    <div className="bg-black text-white py-20 min-h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center items-center overflow-hidden order-2 md:order-1 h-full lg:px-16">
          <video
            src="https://r2.vidzflow.com/v/k2YrMV9fpN_1080p_1708033986.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover rounded-3xl h-[550px]"
          />
        </div>

        <div className="flex flex-col items-center md:items-start px-6 order-1 md:order-2 text-center lg:text-left lg:h-[550px] justify-center lg:px-16">
          <h2 className="text-5xl font-bold leading-snug">
            From carbon <br /> waste to <br /> climate value
          </h2>
          <p className="text-lg mt-4">
            The CO₂ in our air can be much more than just harmful waste. In fact, it can make almost anything you can think of.
            If we can turn the atmosphere into the world&apos;s default carbon source, we can quit fossil fuels and rebalance our climate.
            At Mission Zero, we are already deploying the keystone technology for the post-fossil era.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
