import React from "react";
import footerImg from "../assets/footer-img.png";
import pizzaLogo from "../assets/pizzaLogo.png";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-12 pt-12 pb-4 px-24 flex flex-col justify-center items-center">
      <div className="mt-10">
        <img
          className="h-14 md:h-24  rounded-lg hover:scale-105 duration-300"
          src={footerImg}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center mt-8">
        <img
          className="h-16  rounded-lg hover:scale-105 duration-300"
          src={pizzaLogo}
          alt=""
        />
        <span className="ml-4 text-white text-xl md:text-2xl font-bold">PIZZA HOUSE</span>
        
      </div>
      <p className="mt-4  text-gray-400 text-center">
          Life is too short for bad pizza. Luckily, at our pizza store, every
          slice is a celebration of fresh ingredients, delicious flavors, and
          the joy of sharing with loved ones.
        </p>
        <ul className="flex space-x-6 mt-8">
          <li>
            <a href="https://twitter.com/">
              <FaTwitter size={24} className="text-[#f7b614] hover:text-white cursor-pointer hover:scale-105 duration-200" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <ImFacebook size={24} className="text-[#f7b614] hover:text-white cursor-pointer hover:scale-105 duration-200"/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <AiFillInstagram size={24} className="text-[#f7b614] hover:text-white cursor-pointer hover:scale-105 duration-200"/>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <AiFillYoutube size={24} className="text-[#f7b614] hover:text-white cursor-pointer hover:scale-105 duration-200"/>
            </a>
          </li>
        </ul>
        
        <p className="text-white mt-8 text-center">All Rights Reserved - 2023 - <span>Pizza House</span></p>
    </div>
  );
};

export default Footer;
