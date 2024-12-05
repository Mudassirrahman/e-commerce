import { createSlice } from "@reduxjs/toolkit";

let addToCartReducer = createSlice({
  name: "addToCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemInToCart: (state, action) => {
      let isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        alert("item already added");
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export default addToCartReducer.reducer;
export const { addItemInToCart } = addToCartReducer.actions;
