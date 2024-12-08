import { createSlice } from "@reduxjs/toolkit";

let addToCartReducer = createSlice({
  name: "addToCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemInToCart: (state, action) => {
      let {product, toast} = action.payload
      let isExist = state.items.find((item) => item.id === product.id);
      if (isExist) {
       toast.info("item already exist")
      } else {
        state.items.push(product);
       toast.success("item added in cart")
      }
    },
  },
});

export default addToCartReducer.reducer;
export const { addItemInToCart } = addToCartReducer.actions;
