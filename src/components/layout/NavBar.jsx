import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import Body from "./Body";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navbarLinks, setNabarLinks] = useState(true);

  const goToAuth = () => {
    navigate("/auth");
  };

  useEffect(() => {
    if (location.pathname.includes("/auth")) {
      setNabarLinks(false);
    } else {
      setNabarLinks(true);
    }
  }, [location.pathname]);
  return (
    <>
      <Body>
        <div className="w-full flex justify-between items-center">
          <img src={Logo} alt="Natna Apparel Logo" />

          {/* Links  */}
          {navbarLinks && (
            <div className="hidden lg:flex w-3/5 justify-between items-center text-lg text-primary">
              <p className="w-auto cursor-pointer flex flex-col gap-0.5 group">
                T-Shirt
                <div className="h-0.5 bg-primary transition-all duration-200 ease-in-out w-0 group-hover:w-full"></div>
              </p>
              <p className="w-auto cursor-pointer flex flex-col gap-0.5 group">
                Hoodies
                <div className="h-0.5 bg-primary transition-all duration-200 ease-in-out w-0 group-hover:w-full"></div>
              </p>
              <p className="w-auto cursor-pointer flex flex-col gap-0.5 group">
                Sweater
                <div className="h-0.5 bg-primary transition-all duration-200 ease-in-out w-0 group-hover:w-full"></div>
              </p>
              <div className="flex gap-10 items-center text-xl">
                <FiHeart className="cursor-pointer" />
                <BsCart3 className="cursor-pointer" />
              </div>
              <p
                onClick={goToAuth}
                className="w-auto cursor-pointer flex flex-col gap-0.5 group px-6 py-1 justify-center items-center text-sm font-medium border-2 border-primary hover:bg-primary hover:text-light transition-colors ease-in-out duration-200"
              >
                Sign in
              </p>
            </div>
          )}
        </div>
      </Body>
    </>
  );
};

export default NavBar;
