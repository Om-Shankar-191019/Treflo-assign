import React,{useState} from "react";
import Rating from "@mui/material/Rating";
import ProductModal from "./ProductModal";
const PizzaCard = (props) => {
  const { rating, name, description, price, isVeg, img_url, size, toppings } = props.item;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div className="px-4 flex flex-col justify-center items-center mt-20 ">
      <div>
        <img
          className="h-48  rounded-lg hover:scale-105 duration-300"
          src={img_url}
          alt=""
        />
      </div>

      <Rating
        className="mt-8"
        name="half-rating-read"
        defaultValue={2.5}
        value={rating}
        precision={0.5}
        readOnly
      />
      <h1 className="mt-3 text-2xl font-bold text-black">{name}</h1>
      <p className="mt-3 mb-3 px-12 text-center text-gray-400">{description}</p>
      <span
        className={
          isVeg ? "text-green-600  font-medium" : "text-red-600 font-medium"
        }
      >
        {isVeg ? "Veg" : "Non veg"}
      </span>
      <span className="font-bold text-xl mt-2">Rs.{price}</span>
      <button onClick={handleOpen} className="mt-4 bg-[#f7b614] px-6 py-2 rounded-md text-black font-bold hover:text-white hover:bg-gray-800 duration-300">
        Add to cart
      </button>
      <ProductModal open={open} handleClose={handleClose} name={name} img_url={img_url} size={size} toppings={toppings} price={price}   />
    </div>
  );
};

export default PizzaCard;
