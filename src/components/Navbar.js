import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import {BsCart2} from "react-icons/bs";
import pizzaLogo from "../assets/pizzaLogo.png";
import Cart from "./Cart";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "products",
    },
    {
      id: 3,
      link: "catalog",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-8 text-white bg-gray-800">
      <div>
        <img className="h-14" src={pizzaLogo} alt="" />
      </div>

      <div className="flex items-center">
      <ul className="hidden md:flex pr-12">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:text-[#f7b614] duration-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={handleOpen}>
      <BsCart2 size={24} /> 
      </button>
      <Cart open={open} handleClose={handleClose}   />
      </div>

           

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-white z-10  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-96 sm:w-1/2 h-screen bg-gradient-to-b from-gray-800 to-gray-500 text-white md:hidden z-10">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-3xl sm:text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
