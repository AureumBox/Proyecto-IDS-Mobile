import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import albumReducer from "./albumSlice";
import fantasyReducer from "./fantasySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    album: albumReducer,
    fantasy: fantasyReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
