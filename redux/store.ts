import { configureStore } from "@reduxjs/toolkit";
import menüSlice from "./slices/menüSlice";

export const store = configureStore({
  reducer: {
    menü: menüSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
