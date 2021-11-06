import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAIL,
} from "../constants";

const initialStateSearch = {
  searchField: "",
};

export const searchCat = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateCats = {
    isPending: false,
    cats: [],
    error: ''
}

export const requestCats = (state = initialStateCats, action = {}) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_CATS_SUCCESS:
      return Object.assign({}, state, {cats: action.payload, isPending: false });
    case REQUEST_CATS_FAIL:
      return Object.assign({}, state, {error: action.payload, isPending: false });
    default:
      return state;
  }
};
