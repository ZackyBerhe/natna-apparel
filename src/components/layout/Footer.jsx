import React from "react";
import FooterLogo from "../../assets/logo.svg";
import Input from "../utilities/Input";
import {
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-white/40 w-full px-3 md:px-7 lg:px-32 flex flex-col items-center justify-center mt-16">
        <div className="w-full border-b border-neutral-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 py-10">
          <img
            src={FooterLogo}
            alt="Footer Logo"
            className="w-1/2 h-auto md:block hidden"
          />

          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-4 items-start">
              <p className="font-medium ">Shop</p>
              <ul className="flex gap-2 flex-col">
                <li className="text-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                  T-Shirts
                </li>
                <li className="text-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                  Hoodies
                </li>
                <li className="text-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                  Sweaters
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <p className="font-medium ">Help</p>
              <ul className="flex gap-2 flex-col">
                <li className="text-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                  Privacy Policy{" "}
                </li>
                <li className="text-sm cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
                  Terms and Conditions{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-start ">
            <p className="font-medium ">Subscribe to our Newsletter</p>
            <p className="text-xs font-light">
              Get notified when new products are released
            </p>
            <Input type={"text"} placeholder={"Email Address"} />
            <div className="flex justify-end items-end py-1 w-full">
              <div className="flex flex-col gap-1 group cursor-pointer py-1 text-primary w-max transition-all ease-in-out duration-200">
                <p>Shop Now</p>
                <div className="h-0.5 w-1/4 bg-primary group-hover:w-full transition-all ease-in-out duration-200"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 flex justify-center items-center gap-6">
          <FaInstagram className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" />
          <FaPinterestP className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" />
          <FaFacebookF className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" />
          <FaTiktok className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" />
          <FaTwitter className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" />
          <FaTelegram className="cursor-pointer hover:scale-105 transition-all ease-in-out duration-200" />
        </div>
      </div>
    </>
  );
};

export default Footer;
