import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducers } from "./features";

export const store = configureStore({
  reducer: rootReducers,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
