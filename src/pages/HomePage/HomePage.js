import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const { meals, categoryMeals } = useMealContext();
  return (
    <main className='main-content'>
      {
        !meals ? <div style={{ textAlign: "center", paddingTop: "50px" }} >Meal Not Found</div> : meals.length > 0 ?
          <MealList meals={meals} /> :
          <MealList meals={categoryMeals} />
      }
    </main>
  )
}

export default HomePage;
