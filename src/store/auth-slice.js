import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};

const initialState = {
    user: user,
    address: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const authActions = authSlice.actions;
export default authSlice;
