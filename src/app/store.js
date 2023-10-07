import { configureStore } from "@reduxjs/toolkit";
import filterToggleSlice from "./filterToggle";
import cartSlice from "./cartSlice";
import searchFilterSlice from "./searchFilterSlice";

const store = configureStore({
  reducer: {
    filterToggle: filterToggleSlice.reducer,
    cart: cartSlice.reducer,
    searchFilter: searchFilterSlice.reducer,
  },
});

export default store;
