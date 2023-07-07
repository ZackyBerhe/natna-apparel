import React from "react";
import SingleProductCard from "../components/SingleProductCard";
import Body from "../components/layout/Body";
import ProductCard from "../components/ProductCard";

const Product = () => {
  return (
    <>
      <Body>
        <div className="w-full flex flex-col gap-[20vh] items-center pt-10">
          <SingleProductCard />

          <div className="flex flex-col w-full gap-20">
            <h1 className="font-primary text-4xl">Related Products</h1>

            <div className="md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};

export default Product;
