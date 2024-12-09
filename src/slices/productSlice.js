import { createSlice } from "@reduxjs/toolkit";

let addToCartReducer = createSlice({
  name: "addToCart",
  initialState: {
    products: {
      ProductItemsFromApi: [],
      cartProducts: [],
    },
  },
  reducers: {
    getItems: (state, action) => {
      state.products.ProductItemsFromApi = action.payload;
    },

    addItemInToCart: (state, action) => {
      let { product, toast } = action.payload;
      let isExist = state.products.cartProducts.find(
        (item) => item.id === product.id
      );
      if (isExist) {
        toast.info("item already exist");
      } else {
        state.products.cartProducts.push({ ...product, quntity: 1 });
        toast.success("item added in cart");
      }
    },

    increaseQuntity: (state, action) => {
      let product = state.products.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quntity += 1;
      }
    },

    decreaseQuntity: (state, action) => {
      let product = state.products.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (product && product.quntity > 0) {
        product.quntity -= 1;
      }
    },

    findBySearch: (state, action) => {
      state.products.ProductItemsFromApi =
        state.products.ProductItemsFromApi.filter((item) =>
          item.title.toLowerCase().includes(action.payload.toLowerCase())
        );
    },
  },
});

export default addToCartReducer.reducer;
export const {
  addItemInToCart,
  getItems,
  findBySearch,
  increaseQuntity,
  decreaseQuntity,
} = addToCartReducer.actions;
