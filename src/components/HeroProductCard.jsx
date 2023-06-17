import React from "react";
import ProductImage from "../assets/productImage.png";
import Button from "./utilities/Button";

const HeroProductCard = () => {
  return (
    <>
      <div className="p-6 flex flex-col md:flex-row gap-4 md:w-4/5 lg:w-3/5 items-center bg-white/40">
        <img src={ProductImage} alt="" className="md:w-2/5" />
        <div className="h-full p-6 flex flex-col gap-6">
          <p className="text-2xl md:text-3xl font-medium">
            Vibrant African Pattern T-Shirt
          </p>
          <p className="md:text-lg font-extralight">
            Celebrate African culture with our Vibrant African Pattern T-Shirt.
            Bold, colorful, and eye-catching.
          </p>

          {/* Color */}
          <div className="flex gap-4 items-center">
            <div className="h-8 w-8 border-2 border-primary flex justify-center items-center">
              <div className="cursor-pointer hover:scale-105 h-6 w-6 bg-[#C4B3A3]"></div>
            </div>
          </div>

          {/* Size */}
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center">
              S
            </div>
            <div className="cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center">
              M
            </div>
            <div className="cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center">
              L
            </div>
            <div className="cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center">
              XL
            </div>
          </div>

          {/* Price */}
          <div className="flex gap-4 font-medium py-4">
            <p className="text-4xl">$33.5</p>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-1 group cursor-pointer py-1 text-primary text-lg w-24 transition-all ease-in-out duration-200">
            <p>Shop Now</p>
            <div className="h-0.5 w-1/4 bg-primary group-hover:w-full transition-all ease-in-out duration-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroProductCard;
