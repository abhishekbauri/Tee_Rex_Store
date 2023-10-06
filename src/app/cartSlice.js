import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalItemsPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => item.id === newItem.id);
      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          imageURL: newItem.imageURL,
          name: newItem.name,
          totalPrice: newItem.price,
          itemsQuant: 1,
          quantity: newItem.quantity,
          price: newItem.price,
          gender: newItem.gender,
          color: newItem.color,
          type: newItem.type,
        });
        state.totalQuantity++;
        state.totalItemsPrice = state.totalItemsPrice + newItem.price;
      } else {
        if (existingItems.itemsQuant < existingItems.quantity) {
          existingItems.itemsQuant++;
          existingItems.totalPrice = existingItems.totalPrice + newItem.price;
          state.totalItemsPrice = state.totalItemsPrice + newItem.price;
          state.totalQuantity++;
        } else {
          alert(`Only ${existingItems.quantity} ${existingItems.name} left`);
        }
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalItemsPrice = state.totalItemsPrice - existingItems.price;
      if (existingItems.itemsQuant === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.itemsQuant--;
        existingItems.totalPrice =
          existingItems.totalPrice - existingItems.price;
      }
    },
    removeAllFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItems.itemsQuant;
      state.totalItemsPrice = state.totalItemsPrice - existingItems.totalPrice;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
