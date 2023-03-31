import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import CartItem from "./CartItem";

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
const Cart = ({ open, handleClose }) => {
  
  const itemsData = useSelector((state) => state.cart.items);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-full min-h-max max-w-5/6 md:w-2/3 lg:max-8/12 max-h-fit"
        >
          <h1 className=" text-xl md:text-2xl font-bold border-b border-gray-800 mb-2">
            Cart
          </h1>

          <div className="flex flex-col max-h-96 overflow-scroll ">
            {itemsData &&
              itemsData.map((item, index) => (
                <CartItem
                  key={index}
                  name={item.name}
                  img_url={item.img}
                  toppings={item.toppings}
                  size={item.size}
                  quantity={item.quantity}
                />
              ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
