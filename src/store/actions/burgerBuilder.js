import * as actionTypes from './../actions';
import axios from '../../axios-orders';
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngrFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get('https://react-myburger-e2d71.firebaseio.com/ingredients.json')
      .then((response) => {
        console.log('response :', response);
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngrFailed());
      });
  };
};
