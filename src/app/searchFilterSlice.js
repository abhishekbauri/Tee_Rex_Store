import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async () => {
  const url = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;
  const response = await fetch(url);
  return response.json();
});

const initialState = {
  isLoading: false,
  isError: false,
  data: null, // all data are stored from api
  searchedData: null,
  value: "",
  selectedColor: [], // contains all selected color
  selectedGender: [], // contains all selected gender
  selectedType: [], // contains all selected type
  selectedPrice: [], // contains all selected price range
};

const searchFilterSlice = createSlice({
  name: "searcFilter",
  initialState,
  reducers: {
    search(state, action) {
      state.value = action.payload;
      state.searchedData = state.data.filter((item) =>
        item.name.toLowerCase().includes(state.value.toLowerCase())
      );
    },
    filterByColor(state, action) {
      const color = action.payload;
      if (state.selectedColor.includes(color)) {
        state.selectedColor = state.selectedColor.filter(
          (item) => item !== color
        );
      } else {
        state.selectedColor = [...state.selectedColor, color];
      }
    },
    filterByGender(state, action) {
      const gender = action.payload;
      if (state.selectedGender.includes(gender)) {
        state.selectedGender = state.selectedGender.filter(
          (item) => item !== gender
        );
      } else {
        state.selectedGender = [...state.selectedGender, gender];
      }
    },
    filterByType(state, action) {
      const type = action.payload;
      if (state.selectedType.includes(type)) {
        state.selectedType = state.selectedType.filter((item) => item !== type);
      } else {
        state.selectedType = [...state.selectedType, type];
      }
    },
    filterByPrice(state, action) {
      const priceRange = action.payload;
      if (state.selectedPrice.includes(priceRange)) {
        state.selectedPrice = state.selectedPrice.filter(
          (item) => item !== priceRange
        );
      } else {
        state.selectedPrice = [...state.selectedPrice, priceRange];
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError = true;
      console.error("Error-->", action.payload);
    });
  },
});

export const searchFilterAction = searchFilterSlice.actions;

export default searchFilterSlice;
