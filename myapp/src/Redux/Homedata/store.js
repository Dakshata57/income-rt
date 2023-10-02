import { configureStore } from "@reduxjs/toolkit";
import Homedataslice from "./Homedataslice";

export const store = configureStore({
  reducer: {
    Homedataslice: Homedataslice,
  },
});
