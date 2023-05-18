import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reCard } from "./card";
import { reLike } from "./like";

export const store = configureStore({
  reducer: combineReducers({
    card: reCard,
    like: reLike,
  }),
});
