import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.list.find((r) => r.idMeal === id)
  );

  if (!recipe) return <p>Not found</p>;

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} width="300" />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}