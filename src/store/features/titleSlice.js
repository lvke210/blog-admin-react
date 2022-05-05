import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: { title2: "hahahahha" },
  reducers: {
    changeTitle: (state, actions) => {
      state.title2 = actions.payload;
    },
  },
});

export const { changeTitle } = titleSlice.actions;

export default titleSlice.reducer;
