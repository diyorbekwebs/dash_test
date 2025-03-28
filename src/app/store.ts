import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/productApi"; // API ni import qilamiz

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer, // RTK Query reducerini qo‘shamiz
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
