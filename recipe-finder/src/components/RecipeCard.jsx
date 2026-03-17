import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Card>
      <Link to={`/recipe/${recipe.idMeal}`}>
        <CardMedia
          component="img"
          height="200"
          image={recipe.strMealThumb}
        />
        <CardContent>
          <Typography>{recipe.strMeal}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
}