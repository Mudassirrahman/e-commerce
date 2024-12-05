import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "../slices/addToCartSlice";

export const store = configureStore({
    reducer: {
        cartItems: addToCartReducer
    }
})