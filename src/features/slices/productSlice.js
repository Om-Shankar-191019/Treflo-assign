import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
  name: "product",
  initialState: {
    pizza: null,
    
  },
  reducers: {
    putPizza(state, action) {
      state.pizza = action.payload;
    },
   
  },
});

export const { putPizza } = productSlice.actions;
export default productSlice.reducer;
