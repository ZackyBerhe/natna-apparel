import React from "react";
import ProductCard from "../components/ProductCard";
import Body from "../components/layout/Body";

const Category = () => {
  return (
    <>
      <Body>
        <div className="flex flex-col gap-16 md:gap-24 items-center md:items-start py-20 lg:py-32">
          <div className="flex w-full justify-center md:justify-between items-center">
            <h1 className="font-primary text-6xl">Hoodies</h1>
          </div>

          <div className="md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Body>
    </>
  );
};

export default Category;
