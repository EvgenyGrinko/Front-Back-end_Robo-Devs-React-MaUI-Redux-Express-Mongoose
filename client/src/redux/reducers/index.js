import {
  SET_SEARCHED_WORD,
  GET_ALL_DEVELOPERS,
  ADD_DEVELOPER_STARTED,
  ADD_DEVELOPER_SUCCESS,
  ADD_DEVELOPER_FAILURE,
  GET_ALL_DEVELOPERS_STARTED,
  GET_ALL_DEVELOPERS_SUCCESS,
  GET_ALL_DEVELOPERS_FAILURE,
  GET_ONE_DEVELOPER_STARTED,
  GET_ONE_DEVELOPER_SUCCESS,
  GET_ONE_DEVELOPER_FAILURE,
} from "../constants/acion-types";

const initialState = {
  searchedWord: "",
  loading: false,
  error: null,
  developers: [],
  oneDeveloper: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCHED_WORD:
      return { ...state, searchedWord: payload };
    // case GET_ALL_DEVELOPERS:
    //   return { ...state, developers: action.payload };
    case ADD_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case ADD_DEVELOPER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        developers: [...state.developers, payload],
      };
    case ADD_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };
    case GET_ALL_DEVELOPERS_STARTED:
      return { ...state, loading: true };
    case GET_ALL_DEVELOPERS_SUCCESS:
      return { ...state, loading: false, error: null, developers: payload };
    case GET_ALL_DEVELOPERS_FAILURE:
      return { ...state, loading: false, error: payload.error };
    case GET_ONE_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case GET_ONE_DEVELOPER_SUCCESS:
      return { ...state, loading: false, error: null, oneDeveloper: payload };
    case GET_ONE_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

export default rootReducer;
