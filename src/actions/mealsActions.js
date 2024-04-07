import axios from "../api/axios";
import {
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS
} from "./actions";

import { MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";

export const startFetchSingleMeal = async (dispatch, id) => {
    try {
        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN });
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
        dispatch({ type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals });
    } catch (error) {
        dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message });
    }
}

export const startFetchMealByCategory = async (dispatch, category) => {
    try {
        dispatch({ type: FETCH_CATEGORY_MEALS_BEGIN });
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${"Seafood"}`);
        dispatch({ type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data.meals })
    } catch (error) {
        dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message });
    }
}

export const startFetchMealsBySearch = async (dispatch, searchTerm) => {
    try {
        dispatch({ type: FETCH_MEALS_BEGIN });
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
        console.log(response, "Baked salmon with fennel & tomatoes")
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals });
    } catch (error) {
        dispatch({ type: FETCH_MEALS_ERROR, payload: error.message });
    }
}