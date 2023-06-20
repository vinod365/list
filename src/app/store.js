import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./features/addSlice";

export default configureStore({
  reducer: {
    add: addReducer,
  },
});
