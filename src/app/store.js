import { configureStore } from "@reduxjs/toolkit";
import filterToggleSlice from "./filterToggle";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    filterToggle: filterToggleSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
