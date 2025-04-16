import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  errorMessage: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    isFetching(state) {
      state.isLoading = true;
    },
    isSuccess(state) {
      state.isLoading = false;
    },
    isError(state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice;
