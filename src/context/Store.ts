import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Slices";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
