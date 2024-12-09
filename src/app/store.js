import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";

export const store = configureStore({
    reducer: {
        PRODUCTS: productReducer
    }
})