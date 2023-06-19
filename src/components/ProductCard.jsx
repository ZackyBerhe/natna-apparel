import React from "react";
import Sweater from "../assets/Sweater.png";
import { FiHeart } from "react-icons/fi";

const ProductCard = () => {
  return (
    <>
      <div className="bg-white/40 p-6 flex flex-col gap-6 items-center w-[300px] sm:w-[320px] cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200">
        <img src={Sweater} alt="" />

        <div className="flex flex-col gap-4">
          <p className="font-light">Graphic Women's Comfy Sweater </p>
          <div className="w-full flex justify-between items-center">
            <p className="text-xl font-semibold">$33.5</p>
            <FiHeart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
