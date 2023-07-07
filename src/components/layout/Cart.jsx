import React from "react";
import ProductImage from "../../assets/productImage.png";

const Cart = () => {
  return (
    <>
      <div className="h-screen right-0 fixed bg-white top-0 transition-all duration-300 ease-in-out">
        <div className="flex flex-col gap-10 h-full w-full p-10 items-start">
          <p className="text-2xl lg:text-4xl font-primary ">Cart</p>
          <div className="max-h-[75vh] overflow-auto noscrollBar w-full">
            {/* Cart Product */}
            <div className="w-max flex gap-6 items-start p-6 bg-primary/5">
              <img src={ProductImage} alt="Selected Product" className="h-44" />

              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Cart;
