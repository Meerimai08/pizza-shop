import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
  balance: 0,
};
const basketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.basket.find(
        (product) => product.id === newProduct.id
      );
      if (!existingProduct) {
        state.basket = [...state.basket, newProduct];
        state.balance += newProduct.price;
      }
    },
    deleteProduct(state, action) {
      state.balance -= action.payload;
    },
  },
});
export const { addProduct, balance, deleteProduct } = basketSlice.actions;
export default basketSlice.reducer;
