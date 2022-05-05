import { createSlice } from "@reduxjs/toolkit";
import { changeTitle } from "./titleSlice";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, title: "blue blue" },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
  extraReducers: {
    // [changeTitle]: (state, { payload }) => {
    //   state.title = payload;
    // },
  },
});
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
