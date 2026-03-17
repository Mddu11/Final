import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../features/recipesSlice";
import { TextField, Button } from "@mui/material";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipes(query));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search recipes"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </form>
  );
}