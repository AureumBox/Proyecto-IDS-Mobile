import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import albumReducer from "./albumSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    album: albumReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
