import React from "react";
import CockTailNavBars from "./FoodAppNavBar";
// import { Route,Routes } from "react-router-dom";
// import AddRecipe  from './AddRecipe';
// import Profile from './Profile';
// import RecipeBook from './RecipeBook'
// import Home  from './FoodHome';
import { Outlet } from "react-router-dom";

export default function FoodApp() {
  return (
    <div>
      <CockTailNavBars />
      <main style={{ marginTop: "80px" }}>
        <Outlet />
      </main>
    </div>
  );
}
