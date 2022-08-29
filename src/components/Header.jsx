import React from "react";

import { motion } from "framer-motion";

import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

import { signInWithGooglePopup } from "../utils/firebase/firebase";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const signIn = async (event) => {
    event.preventDefault();
    try {
      const res = await signInWithGooglePopup();
      console.log(res);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* For laptops and tablets */}
      <div className="hidden md:flex justify-between w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">Fry</p>
        </Link>
        <div className="flex gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor  hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <FaShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-4 -right-4 w-7 h-7 flex items-center justify-center rounded-full bg-orange-600">
              <p className="text-sm">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={Avatar}
              alt="user profile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-sm"
              onClick={signIn}
            />
          </div>
        </div>
      </div>
      {/* for mobile devices */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>
  );
};

export default Header;
