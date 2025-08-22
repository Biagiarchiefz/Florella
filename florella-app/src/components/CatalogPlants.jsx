import React from "react";
import Title from "./Title";
import PlantCard from "./PlantCard";

const CatalogPlants = () => {
  return (
    <div className="px-6 md:px-16 lg:px-50 pt-10 pb-[100px]">
      <Title title="Popular plants" />
      <PlantCard/>
    </div>
  );
};

export default CatalogPlants;
