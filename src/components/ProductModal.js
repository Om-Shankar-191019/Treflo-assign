import React, { useState } from "react";
import Box from "@mui/material/Box";
import {  useDispatch } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import { addItem } from "../features/slices/cartSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
const ProductModal = ({
  open,
  handleClose,
  name,
  img_url,
  size,
  toppings,
  price,
}) => {
  const top = toppings[0].items;
  const pizza_size = size[0].items;
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState("Regular");
  const [checkedValues, setCheckedValues] = useState([]);
  const [numberValue, setNumberValue] = useState(0);

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    const currentIndex = checkedValues.indexOf(value);
    const newCheckedValues = [...checkedValues];

    if (currentIndex === -1) {
      newCheckedValues.push(value);
    } else {
      newCheckedValues.splice(currentIndex, 1);
    }

    setCheckedValues(newCheckedValues);
  };

  const handleNumberChange = (event) => {
    const newValue = isNaN(event.target.valueAsNumber) ? 0 : event.target.valueAsNumber;
    setNumberValue(newValue);
  };
  const handleAdd = () => {
    if(numberValue===0)
      alert("Quantity is Zero, Please add quantity.");
    else{
      dispatch(addItem({
        name:name,
        img:img_url,
        size:radioValue,
        toppings:checkedValues,
        quantity:numberValue
      }))

      handleClose();
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-5/6 md:w-3/4 lg:8/12">
          <div className="flex flex-col md:flex-row md:justify-end lg:justify-around">
            <div className="flex flex-col justify-center items-center mr-4">
              <img className="h-28 md:40 rounded-lg" src={img_url} alt="" />
              <span className="mt-3 text-xl md:text-2xl font-bold text-center">
                {name}
              </span>
              <p className="mt-2 text-lg md:text-xl text text-gray-600  ">
                Rs.{price}
              </p>
              <button
                onClick={handleAdd}
                className="flex items-center mt-4 bg-[#f7b614] px-6 py-2 rounded-md text-black font-bold hover:text-white hover:bg-gray-800 duration-300"
              >
                Add <AiOutlinePlus size={20} className="ml-2" />
              </button>
            </div>

            <div className="mt-4 md:mt-0 grid grid-cols-2 ">
              <form>
                <p className="text-xl md:text-2xl font-medium">Select size</p>
                {pizza_size.map((item, index) => (
                  <div key={index} className="my-2">
                    <input
                      type="radio"
                      id={item.size}
                      name="pizza_size"
                      value={item.size}
                      checked={radioValue === item.size}
                      onChange={handleRadioChange}
                    />
                    <label
                      className="text-lg md:text-xl ml-3 "
                      htmlFor={item.size}
                    >
                      {item.size}
                    </label>
                    <br />
                  </div>
                ))}
                <div className="flex flex-col ">
                  <span className="mt-2 text-lg md:text-lg font-bold">
                    Quantity
                  </span>
                  <input
                    className="outline-0 border-2 border-gray-800 px-2 w-16 mt-2 rounded-sm"
                    type="number"
                    min="0"
                    value={numberValue}
                    autoFocus
                    placeholder="0"
                    onChange={handleNumberChange}
                  />
                </div>
              </form>

              <fieldset>
                <legend className="text-xl md:text-2xl font-medium">
                  Add toppings
                </legend>
                {top.map((item, index) => (
                  <div key={index} className="my-2">
                    <input
                      type="checkbox"
                      id={item.name}
                      name={item.name}
                      value={item.name}
                      checked={checkedValues.includes(item.name)}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="text-lg md:text-xl ml-3 "
                      htmlFor={item.name}
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;
