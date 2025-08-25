import React from "react";
import newsImg from "../assets/NewsLatter.jpeg";

const NewsLetter = () => {
  return (
    <div className="pb-[40px] md:pb-[100px]">
      <div className="relative md:grid md:grid-cols-2 max-w-[1140px] bg-[#F5F5F5] mx-4 md:mx-auto ">
        <img
          src={newsImg}
          alt="newsletter"
          className="w-full max-w-lg h-100 object-cover"
        />

        <div className="hidden md:flex items-center justify-center">
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h1 className="text-[110px] font-semibold text-[#034032] ">-20%</h1>
            <h3 className="text-4xl font-normal">For all plants</h3>
            <p className="mt-2 text-[#1B1B1B]/80">
              the promotion is valid until August 5
            </p>
          </div>
        </div>

        {/* ukuran mobile text di atas gambar */}
        <div className="absolute top-16 right-7 text-[#F5F5F5] flex flex-col items-center md:hidden">
            <h1 className="text-[110px] font-semibold text-[#034032] ">-20%</h1>
            <h3 className="text-4xl font-normal">For all plants</h3>
            <p className="mt-2">
              the promotion is valid until August 5
            </p>
        </div>


      </div>
    </div>
  );
};

export default NewsLetter;
