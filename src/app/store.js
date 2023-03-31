import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../features/slices/sliderSlice";
import productReducer from "../features/slices/productSlice"
import filterReducer from "../features/slices/filterSlice";
import cartReducer from "../features/slices/cartSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    product: productReducer,
    filter:filterReducer,
    cart:cartReducer
  },
});
