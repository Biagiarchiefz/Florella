import React from "react";
import Title from "../components/Title";
import Img from "../assets/CompanyImg.png";

const AboutCompany = () => {
  return (
    <div className="pl-6 md:pl-16 lg:pl-50 pt-10 pb-[200px]">
      <div className="flex relative">
        <div className="flex flex-col gap-6">
          <Title title="Company" />
          <h1 className="max-w-160">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            itaque, reprehenderit at voluptatum necessitatibus suscipit tenetur
            eaque, beatae deleniti dolore blanditiis velit qui quae ipsum.
            Pariatur ipsum sit doloribus vel blanditiis voluptatem voluptates
            consequuntur id, incidunt non cumque cum voluptatibus quidem hic,
            modi in minima! Magnam suscipit voluptatem ea porro.
          </h1>
        </div>
        <img
          src={Img}
          alt=""
          className=" max-w-[500px] absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

export default AboutCompany;
