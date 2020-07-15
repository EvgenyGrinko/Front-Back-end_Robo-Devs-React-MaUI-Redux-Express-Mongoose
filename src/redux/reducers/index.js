import {
  SET_SEARCHED_WORD,
  GET_ALL_DEVELOPERS,
} from "../constants/acion-types";

const initialState = {
  searchedWord: "",
  developers: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHED_WORD:
      return { ...state, searchedWord: action.payload };
    case GET_ALL_DEVELOPERS:
      return { ...state, developers: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
