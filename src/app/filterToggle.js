import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  showFilter: false,
};

const filterToggleSlice = createSlice({
  name: "filterToggle",
  initialState: filterInitialState,
  reducers: {
    filterToggle(state) {
      state.showFilter = !state.showFilter;
    },
  },
});

export const filterToggleAction = filterToggleSlice.actions;

export default filterToggleSlice;
