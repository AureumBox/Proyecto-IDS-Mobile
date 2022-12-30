import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import fantasyReducer from "./fantasySlice";

export const store = configureStore({
  reducer: { auth: authReducer, fantasy: fantasyReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
