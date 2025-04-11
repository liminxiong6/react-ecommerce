import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: null,
  categories: null,
  pagination: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    replaceProducts: (state, action) => {
      const { products, pageNumber, pageSize, totalElements, lastPage } =
        action.payload;

      state.products = products;
      state.pagination = {
        pageNumber,
        pageSize,
        totalElements,
        lastPage,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const productActions = productSlice.actions;

export default productSlice.reducer;
