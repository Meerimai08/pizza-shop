import { configureStore } from "@reduxjs/toolkit";
import basket from "./reducer/basket";

const store = configureStore({
  reducer: {
    basket: basket,
  },
});
export default store;
