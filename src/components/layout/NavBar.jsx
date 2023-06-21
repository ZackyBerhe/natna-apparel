import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FiHeart } from "react-icons/fi";
import { BsCart3, BsList } from "react-icons/bs";
import Body from "./Body";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navbarLinks, setNabarLinks] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

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

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <BsList
              className="cursor-pointer text-3xl"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>

          {/* Links */}
          {navbarLinks && (
            <div
              className={`${
                showMenu
                  ? "w-full absolute top-16 left-0 bg-white flex flex-col gap-6 justify-between items-center text-lg text-primary p-4"
                  : "hidden"
              } w-3/5 lg:flex flex-col lg:flex-row justify-between items-center text-lg text-primary p-4`}
            >
              <p className="cursor-pointer flex flex-col gap-0.5 group p-2 lg:p-0 w-full lg:w-auto hover:bg-primary/5 lg:hover:bg-transparent transition-all duration-200 ease-in-out">
                T-Shirt
                <div className="lg:block hidden h-0.5 bg-primary transition-all duration-200 ease-in-out w-0 group-hover:w-full"></div>
              </p>
              <p className="cursor-pointer flex flex-col gap-0.5 group p-2 lg:p-0 w-full lg:w-auto hover:bg-primary/5 lg:hover:bg-transparent transition-all duration-200 ease-in-out">
                Hoodies
                <div className="lg:block hidden h-0.5 bg-primary transition-all duration-200 ease-in-out w-0 group-hover:w-full"></div>
              </p>
              <p className="cursor-pointer flex flex-col gap-0.5 group p-2 lg:p-0 w-full lg:w-auto hover:bg-primary/5 lg:hover:bg-transparent transition-all duration-200 ease-in-out">
                Sweater
                <div className="lg:block hidden h-0.5 bg-primary transition-all duration-200 ease-in-out w-0 group-hover:w-full"></div>
              </p>
              <div className="flex gap-10 justify-start items-center text-xl w-full lg:w-auto">
                <FiHeart className="cursor-pointer" />
                <BsCart3 className="cursor-pointer" />
              </div>
              <p
                onClick={goToAuth}
                className="w-full lg:w-auto cursor-pointer flex flex-col gap-0.5 group px-6 py-1 justify-center items-center text-sm font-medium border-2 border-primary hover:bg-primary hover:text-light transition-colors ease-in-out duration-200"
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
