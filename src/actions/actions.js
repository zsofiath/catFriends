import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAIL,
} from "../constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestCats = () => (dispatch) => {
    dispatch({ type: REQUEST_CATS_PENDING});
    fetch("https://jsonplaceholder.cypress.io/todos/")
    .then((response) => response.json())
    .then((json) => {
        dispatch({ type: REQUEST_CATS_SUCCESS, payload: json});
    }).catch(err => {
        dispatch({ type: REQUEST_CATS_FAIL, payload: err});
    })
}