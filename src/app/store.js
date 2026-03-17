import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipesSlice";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("recipes");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  preloadedState: {
    recipes: loadFromLocalStorage(),
  },
});

store.subscribe(() => {
  localStorage.setItem("recipes", JSON.stringify(store.getState().recipes));
});

export default store;