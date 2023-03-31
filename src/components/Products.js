import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { putPizza } from "../features/slices/productSlice";
import PizzaCard from "./PizzaCard";
import Filters from "./Filters";

const Products = () => {
  const selectPizza = useSelector((state) => state.product.pizza);
  const dispatch = useDispatch();
  

  const endpoint =
    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  const getPizza = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(putPizza(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPizza();
  },[]);

  return (
    <div name="products" className="pt-12">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#f7b614] font-bold text-xl ">Quick pick</p>
        <h1 className="text-black font-bold text-4xl mt-3">Popular Goods</h1>
      </div>

      <Filters />

      {!selectPizza ? (
        <div className="text-center ">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 sm:grid-gap-2 items-center ">
          {selectPizza.map((item) => (
            <PizzaCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
