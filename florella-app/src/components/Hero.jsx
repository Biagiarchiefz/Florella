import React from "react";
import Vector from "../assets/Vector.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-[#F5F5F5] ">

      <div className="relative grid grid-cols-2 md:grid-cols-3 h-[100vh]">
        <img
          src={Vector}
          alt=""
          className="absolute max-w-[350px] bottom-0 right-5 md:max-w-[370px] md:bottom-0 md:right-[320px]"
        />

        <div className="bg-[#F5F5F5] md:col-span-2 flex flex-col items-center justify-center">
          <div className="hidden md:flex flex-col gap-6 mt-[100px] max-w-100">
            <h1 className="text-2xl md:text-5xl tracking-[2px] font-bold text-[#034032] leading-[60px]">
              ADD GREENERY TO YOUR HOME
            </h1>

            <p className="text-4xl max-w-80 tracking-wider font-semibold">
              INDOOR PLANTS & FLOWERS
            </p>
            <Button to="/" w="max-w-80">
              Show Now
            </Button>
          </div>
        </div>

        <div className="bg-[#034032] "></div>
      </div>

      <div className="bg-[#F5F5F5] md:hidden flex flex-col items-center justify-center p-9">
          <div className="flex flex-col gap-6 max-w-full">
            <h1 className="text-4xl md:text-5xl tracking-[1px] font-bold text-[#034032] leading-[50px]">
              ADD GREENERY TO YOUR HOME
            </h1>

            <p className="text-3xl max-w-80 ">
              INDOOR PLANTS & FLOWERS
            </p>
            <Button to="/" w="max-w-80">
              Show Now
            </Button>
          </div>
        </div>

    </div>
  );
};

export default Hero;
