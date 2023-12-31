import React from "react";
import Body from "../components/layout/Body";
import HeroImage from "../assets/Hero-Image.png";
import HeroProductCard from "../components/HeroProductCard";
import ProductCard from "../components/ProductCard";
import Button from "../components/utilities/Button";

const Home = () => {
  return (
    <>
      <Body>
        <div className="w-full flex flex-col gap-20">
          {/* hero Section  */}
          <div className="w-full flex flex-col gap-10 lg:gap-32 mt-14 items-center">
            <div className="flex flex-col gap-2 md:gap-8 w-full items-center justify-center">
              <h1 className="font-primary text-6xl lg:text-8xl">
                Style Simplified
              </h1>
              <p className="md:text-xl md:text-center tracking-wider font-extralight md:w-1/2">
                Get ready to look and feel your best with our fashion-forward
                clothing and expert styling advice
              </p>
            </div>

            <img src={HeroImage} alt="" className="md:w-1/2" />
          </div>

          {/* Trending Products Section */}
          <div className="flex flex-col gap-20 w-full items-center my-10">
            <p className="text-4xl font-primary">Trending Products</p>

            <HeroProductCard />
          </div>

          {/* Top Sellers Products Section */}
          <div className="flex flex-col gap-20 w-full items-center md:items-start my-10">
            <p className="text-4xl font-primary">Top Sellers Products</p>
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
            <div className="w-full flex justify-center items-center">
              <div className="w-44">
                <Button>Shop Now</Button>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  );
};

export default Home;
