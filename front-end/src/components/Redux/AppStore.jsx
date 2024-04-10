import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";

const AppStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { AppStore };
