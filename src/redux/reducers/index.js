import {
  SET_SEARCHED_WORD,
  GET_ALL_DEVELOPERS,
  ADD_DEVELOPER_STARTED,
  ADD_DEVELOPER_SUCCESS,
  ADD_DEVELOPER_FAILURE,
  GET_DEVELOPER_STARTED,
  GET_DEVELOPER_SUCCESS,
  GET_DEVELOPER_FAILURE,
} from "../constants/acion-types";

const initialState = {
  searchedWord: "",
  loading: false,
  error: null,
  developers: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHED_WORD:
      return { ...state, searchedWord: action.payload };
    case GET_ALL_DEVELOPERS:
      return { ...state, developers: action.payload };
    case ADD_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case ADD_DEVELOPER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        developers: [...state.developers, action.payload],
      };
    case ADD_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case GET_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case GET_DEVELOPER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        developers: [action.payload],
      };
    case GET_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export default rootReducer;
