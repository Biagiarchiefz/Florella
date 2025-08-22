import React from 'react'
import plant1 from "../assets/plants1.jpeg";
import { Heart } from "lucide-react";
import Button from "./Button";

const plants = [
  {
    id: 1,
    name: "Ficus Lirata",
    price: 60000,
    liked: false,
    image: plant1,
  },
  {
    id: 2,
    name: "Ficus Lirata",
    price: 60000,
    liked: false,
    image: plant1,
  },
  {
    id: 3,
    name: "Ficus Lirata",
    price: 60000,
    liked: false,
    image: plant1,
  },
   {
    id: 4,
    name: "Ficus Lirata",
    price: 60000,
    liked: false,
    image: plant1,
  },
   
];

const PlantCard = () => {
  return (

      <div className="grid grid-cols-3 justify-between gap-4 mt-10 ">
    
          {plants.map((plant) => (
            <div key={plant.id} className="flex flex-col mb-17 w-full gap-1">
              <img src={plant.image} alt="" className="h-100 object-cover" />
              <div className="flex justify-between gap-3">
                <h3>{plant.name}</h3>
                <Heart size={20} />
              </div>
              <p>Rp. {plant.price.toLocaleString()}</p>
              <Button to="">Buy</Button>
            </div>
          ))}
      
      
      </div>
    
  )
}

export default PlantCard
