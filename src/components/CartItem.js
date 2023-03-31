import React from "react";
import {  useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

import { decreaseQuantity,increaseQuantity } from "../features/slices/cartSlice";


const CartItem = ({ img_url, name, size, toppings,quantity }) => {
    const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(increaseQuantity ({
        img:img_url,
        name:name,
        size:size,
        toppings:toppings,
        quantity:quantity
    }))
  };

  const handleReduce = () => {
    dispatch(decreaseQuantity ({
        img:img_url,
        name:name,
        size:size,
        toppings:toppings,
        quantity:quantity
    }))
  };
  return (
    <div className="grid grid-cols-2 max-w-5/6 m-4 shadow-lg p-3 rounded-lg bg-gray-200">
      <div className="flex flex-col justify-center items-center mr-4">
        <img className="h-16 md:28 rounded-lg" src={img_url} alt="" />
        <span className="mt-2 text-xs md:text-sm font-bold text-center">
          {name}
        </span>

       
      </div>

      <div className="flex flex-col justify-between">
        <span className="text-base md:text-lg font-medium ">
          {size}
        </span>
        <div className="mt-2 flex flex-wrap ">
          {toppings &&
            toppings.map((item, index) => (
              <span
                key={index}
                className=" text-xs md:text-sm text-gray-600 mr-4"
              >
                {item}
              </span>
            ))}
        </div>
        <div className="flex mt-2">
            <button onClick={handleReduce} className="px-2 md:px-4 border border-gray-800 rounded-sm">
                <AiOutlineMinus size={24}/>
            </button>
            <span className="px-2 md:px-4 border border-gray-800 rounded-sm">
                {quantity}
            </span>
            <button onClick={handleAdd} className="px-2 md:px-4 border border-gray-800 rounded-sm">
                <AiOutlinePlus size={24}/>
            </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
