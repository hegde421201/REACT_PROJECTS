//holds the global state of the app in a readable object tree
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
