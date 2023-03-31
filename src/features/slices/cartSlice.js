import { createSlice } from "@reduxjs/toolkit";
import { arrayEquals } from "../logic";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:[]
    
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => (
        item.img === newItem.img && item.size === newItem.size && item.name === newItem.name && arrayEquals(item.toppings,newItem.toppings)
      ));
      
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        
        state.items.push(newItem);
      }
    },

    increaseQuantity (state,action){
        const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => (
        item.img === newItem.img && item.size === newItem.size && item.name === newItem.name &&  item.quantity === newItem.quantity &&arrayEquals(item.toppings,newItem.toppings)
      ));
      
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++;
      }
    },

    decreaseQuantity (state,action){
        const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => (
        item.img === newItem.img && item.size === newItem.size && item.name === newItem.name &&  item.quantity === newItem.quantity &&arrayEquals(item.toppings,newItem.toppings)
      ));
      
      if (existingItemIndex !== -1) {
        if(state.items[existingItemIndex].quantity === 1) 
            state.items.splice(existingItemIndex,1);
        else
        state.items[existingItemIndex].quantity--;  
      }
    }
  }
});

export const { addItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
