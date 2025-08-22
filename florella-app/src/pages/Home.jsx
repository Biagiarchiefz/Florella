import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import PopularPlants from "../components/PopularPlants";
import NewsLetter from "../components/NewsLetter";
import CatalogPlants from "../components/CatalogPlants";
import AboutCompany from "../components/AboutCompany";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PopularPlants/>
      <NewsLetter/>
      <CatalogPlants/>
      <AboutCompany/>
    </>
  );
};

export default Home;
