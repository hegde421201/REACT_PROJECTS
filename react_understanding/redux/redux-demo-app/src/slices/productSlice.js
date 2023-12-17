import { createSlice } from "@reduxjs/toolkit";

const initData = {
  products: [
    { pname: "Apple", price: 20 },
    { pname: "Orange", price: 40 },
    { pname: "Watermelon", price: 80 },
    { pname: "Grapes", price: 64 },
  ],
  cart: [],
  total: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState: initData,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + parseInt(action.payload.price);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(
        (item, index) => index !== action.payload.index
      );
      state.total = state.total - action.payload.price;
    },
  },
});

export const { purchase, deleteItem } = productSlice.actions;
export default productSlice.reducer;

/**
 The <Provider> component makes the redux store available to any nested components that need access
 to redux store
 */
