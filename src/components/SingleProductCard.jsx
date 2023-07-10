import React, { useState } from "react";
import ProductImage from "../assets/productImage.png";
import Button from "./utilities/Button";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const SingleProductCard = () => {
  const singlePrice = 32.5;
  const [itemQuantity, setItemQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState("small");
  const [price, setPrice] = useState();

  const handleAdd = () => {
    setItemQuantity(itemQuantity + 1);
    setPrice(singlePrice + price);
  };

  const handleSubtract = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      setPrice(singlePrice - price);
    }
  };

  return (
    <>
      <div className="p-6 flex flex-col md:flex-row gap-4 md:w-4/5 items-center preventSelect">
        <img src={ProductImage} alt="" className="md:w-2/5" />
        <div className="h-full p-6 flex flex-col gap-8 bg-white/40 py-10">
          <p className="text-sm font-light tracking-wide">T- Shirt</p>
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
            <div
              onClick={() => setActiveSize("small")}
              className={`${
                activeSize === "small" ? "border border-primary" : "border-none"
              } cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center`}
            >
              S
            </div>
            <div
              onClick={() => setActiveSize("medium")}
              className={`${
                activeSize === "medium"
                  ? "border border-primary"
                  : "border-none"
              } cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center`}
            >
              M
            </div>
            <div
              onClick={() => setActiveSize("large")}
              className={`${
                activeSize === "large" ? "border border-primary" : "border-none"
              } cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center`}
            >
              L
            </div>
            <div
              onClick={() => setActiveSize("extraLarge")}
              className={`${
                activeSize === "extraLarge"
                  ? "border border-primary"
                  : "border-none"
              } cursor-pointer hover:scale-105 h-8 w-8 bg-white text-sm font-medium font-secondary flex justify-center items-center`}
            >
              XL
            </div>
          </div>

          <div className="flex gap-4 items-center justify-start text-primary">
            <div
              onClick={handleSubtract}
              className="h-8 w-8 bg-white border border-primary hover:scale-105 text-sm flex justify-center items-center cursor-pointer"
            >
              <BiMinus />
            </div>
            <p className="text-sm font-medium">{itemQuantity}</p>
            <div
              onClick={handleAdd}
              className="h-8 w-8 bg-white border border-primary hover:scale-105 text-sm flex justify-center items-center cursor-pointer"
            >
              <BiPlus />
            </div>
          </div>

          {/* Price */}
          <div className="flex gap-4 font-medium py-4">
            <p className="text-4xl">$33.5</p>
          </div>

          {/* Buttons */}
          <div className="flex w-full justify-center gap-10 items-center">
            <div className="flex flex-col gap-1 group cursor-pointer py-2 text-primary px-8 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 font-light text-sm">
              <div className="flex gap-2 items-center">
                <FiHeart />
                <p>Add to Wiashlist</p>
              </div>
              <div className="h-0.5 w-1/4 bg-primary group-hover:bg-white group-hover:w-full transition-all ease-in-out duration-200"></div>
            </div>
            <div className="flex flex-col gap-1 group cursor-pointer py-2 text-primary px-8 bg-primary/10 hover:bg-primary hover:text-white transition-all ease-in-out duration-200 font-light text-sm">
              <div className="flex gap-2 items-center">
                <BsCart3 />
                <p>Add to Cart</p>
              </div>
              <div className="h-0.5 w-1/4 bg-primary group-hover:bg-white group-hover:w-full transition-all ease-in-out duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
