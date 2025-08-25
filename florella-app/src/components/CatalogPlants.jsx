import React from "react";
import Title from "./Title";
import PlantCard from "./PlantCard";

const CatalogPlants = () => {
  return (
    <div className="px-6 md:px-16 lg:px-50 pt-10 md:pb-[100px]">
      <Title title="Catalog" />
      <PlantCard/>
    </div>
  );
};

export default CatalogPlants;
