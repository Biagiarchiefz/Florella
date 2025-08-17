import React from "react";
import Vector from '../assets/Vector.png'

const Hero = () => {
  return (
    <div className="relative h-screen grid grid-cols-3 bg-[#F5F5F5] ">
        <img src={Vector} alt="" className="absolute max-w-[370px] bottom-0 right-[320px] " />
      <div class="bg-[#F5F5F5] col-span-2 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6  mt-[100px] max-w-100">
          <h1 className="text-2xl md:text-5xl tracking-[2px] font-bold text-[#034032] leading-[60px]">ADD GREENERY TO YOUR HOME</h1>
          <p className="text-4xl max-w-80 tracking-wider font-semibold">INDOOR PLANTS & FLOWERS</p>
          <p className="text-[#f5f5f5] py-3 px-6 bg-[#1B1B1B] text-center md:max-w-80">Show now</p>
      </div>
      </div>

      <div class="bg-[#034032]">

      </div>

    </div>
  );
};

export default Hero;
