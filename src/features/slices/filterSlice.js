import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    currentFilter: "all",
    
  },
  reducers: {
    changeFilter(state, action) {
      state.currentFilter = action.payload;
    },
   
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
