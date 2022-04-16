import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
