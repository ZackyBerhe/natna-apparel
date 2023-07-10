import React, { useState } from "react";
import ProductImage from "../../assets/productImage.png";
import { BiPlus, BiMinus } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Cart = () => {
  const singlePrice = 32.5;
  const [itemQuantity, setItemQuantity] = useState(1);
  const [price, setPrice] = useState(singlePrice);

  const handleAdd = () => {
    if (itemQuantity < 20) {
      setItemQuantity(itemQuantity + 1);
      setPrice(singlePrice + price);
    }
  };

  const handleSubtract = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
      setPrice(price - singlePrice);
    }
  };

  const items = [1, 2];
  return (
    <>
      <div className="h-screen right-0 fixed bg-white top-0 transition-all duration-300 ease-in-out preventSelect">
        <div className="flex flex-col gap-10 h-full w-full p-10 items-start">
          <p className="text-2xl lg:text-4xl font-primary ">Cart</p>
          <div className="max-h-[75vh] overflow-auto noscrollBar w-full flex flex-col gap-4">
            {/* Cart Product */}
            {items.map(() => {
              return (
                <div className="flex flex-col bg-primary/5">
                  <div className="w-max flex gap-6 items-start ">
                    <img
                      src={ProductImage}
                      alt="Selected Product"
                      className="h-32 py-4 pl-4"
                    />

                    <div className="flex flex-col gap-2 py-4 pr-4">
                      <p className="text-sm font-light tracking-wide">
                        T- Shirt
                      </p>
                      <p className="font-medium">
                        Vibrant African Pattern T-Shirt
                      </p>

                      <div className="w-full flex justify-between items-center">
                        <div className="flex gap-2 items-center justify-start text-primary">
                          <div
                            onClick={handleSubtract}
                            className="h-6 w-6 bg-white border border-primary hover:scale-105 text-sm flex justify-center items-center cursor-pointer"
                          >
                            <BiMinus />
                          </div>
                          <p className="text-sm font-medium h-6 w-6 flex justify-center items-center">
                            {itemQuantity}
                          </p>
                          <div
                            onClick={handleAdd}
                            className="h-6 w-6 bg-white border border-primary hover:scale-105 text-sm flex justify-center items-center cursor-pointer"
                          >
                            <BiPlus />
                          </div>
                        </div>
                        {/* Price */}
                        <div className="flex gap-4 font-medium">
                          <p className="text-xl">${price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full p-2 flex items-center justify-center gap-2 text-primary cursor-pointer hover:bg-primary/10 transition-colors ease-in-out duration-200">
                    <AiOutlineDelete />
                    <p className="text-sm font-medium">Remove</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Cart;
