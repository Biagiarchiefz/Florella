import React from "react";
import plant1 from "../assets/plants1.jpeg";
import plant2 from "../assets/plant2.jpeg"
import { Heart } from "lucide-react";
import Button from "./Button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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
    image: plant2,
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

const CarouselCard = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1, // Bergeser 1 item setiap kali tombol Next/Previous ditekan
      }}
      className="" // Mengatur lebar maksimum carousel
    >
      <CarouselContent className="flex justify-between mt-10">
        {plants.map((plant) => (
          <CarouselItem key={plant.id} className="basis-1/1 md:basis-1/3">
            <div className="">
              <div className="flex flex-col gap-1">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-120 object-cover"
                />
                <div className="flex justify-between w-full">
                  <h3 className="text-lg font-semibold">{plant.name}</h3>
                  <Heart width={20} className="cursor-pointer" />
                </div>
                <p className="text-sm">Rp.{plant.price.toLocaleString()}</p>
                <Button to="">Buy</Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="font-bold" />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselCard;



