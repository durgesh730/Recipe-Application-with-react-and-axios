import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer } from "../reducers/mealReducer";
import { startFetchMealByCategory } from "../actions/mealsActions";

const initialState = {
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false
}

const MealContext = createContext({});
export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);
   console.log(state)
    useEffect(() => {
        startFetchMealByCategory(dispatch);
    }, []);


    return (
        <MealContext.Provider value = {{
            ...state,
            dispatch,
            startFetchMealByCategory
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}