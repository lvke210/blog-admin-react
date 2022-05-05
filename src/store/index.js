import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import titleReducer from "./features/titleSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    titled: titleReducer,
  },
});

export default store;
