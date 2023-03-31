import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { putPizza } from "../features/slices/productSlice";
import { changeFilter } from "../features/slices/filterSlice";
const Filters = () => {
    const selectFilter = useSelector((state) => state.filter.currentFilter);
  const dispatch = useDispatch();

    const endpoint =
    "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68";
  const allFilters = [
    { id: 1, filter: "all",active:selectFilter==="all" },
    { id: 2, filter: "veg",active:selectFilter==="veg" },
    { id: 3, filter: "non-veg",active:selectFilter==="non-veg" },
    { id: 4, filter: "rating",active:selectFilter==="rating" },
    { id: 5, filter: "price",active:selectFilter==="price" },
  ];

  
  const getAllProducts = (filterTerm,data) =>{
    dispatch(putPizza(data));
    dispatch(changeFilter(filterTerm));
  }

  const getVegProducts = (filterTerm,data) =>{
    const filteredItems = data.filter(item => item.isVeg===true);
    dispatch(putPizza(filteredItems));
    dispatch(changeFilter(filterTerm));
  }

  const getNonVegProducts = (filterTerm,data) =>{
    const filteredItems = data.filter(item => item.isVeg!==true);
    dispatch(putPizza(filteredItems));
    dispatch(changeFilter(filterTerm));
  }

  const sortByRatings = (filterTerm,data) =>{
    data.sort((a, b) => b.rating - a.rating)
    dispatch(putPizza(data));
    dispatch(changeFilter(filterTerm));
  }

  const sortByPrice = (filterTerm,data) =>{
    data.sort((a, b) => b.price - a.price)
    dispatch(putPizza(data));
    dispatch(changeFilter(filterTerm));
  }
  
 
  const filteredProducts = (term,data) => {
    if (term === "all") getAllProducts(term,data);
    else if (term === "veg") getVegProducts(term,data);
    else if (term === "non-veg") getNonVegProducts(term,data);
    else if (term === "rating") sortByRatings(term,data);
    else if (term === "price") sortByPrice(term,data);
  };

  const fetchProducts = (filter) => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        filteredProducts(filter,data)
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return (
    <div className="flex flex-wrap items-center justify-center cursor-pointer mt-8 space-x-3">
      {allFilters.map(({ id, filter,active }) => (
        <button
          key={id}
          onClick={() => fetchProducts(filter)}
          className={!active ? 'capitalize mt-4 bg-[#f7b614] px-6 py-2 rounded-md text-black font-bold hover:text-white hover:bg-gray-800 duration-300'
          : 'capitalize mt-4  px-6 py-2 rounded-md  font-bold text-white bg-gray-800 duration-300'
          }
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
