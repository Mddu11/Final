import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "../components/SearchForm";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const { list, status } = useSelector((state) => state.recipes);

  return (
    <div>
      <SearchForm />

      {status === "loading" && <p>Loading...</p>}

      <div>
        {list.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}