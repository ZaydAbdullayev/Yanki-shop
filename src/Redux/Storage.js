import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCard } from "./card";

export const store = configureStore({
  reducer: combineReducers({
    card: reCard,
  }),
});
