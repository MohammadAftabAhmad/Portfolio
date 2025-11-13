import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./project/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

// ✅ TypeScript setup
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
