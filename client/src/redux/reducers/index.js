import {
  SET_SEARCHED_WORD,
  ADD_DEVELOPER_STARTED,
  ADD_DEVELOPER_SUCCESS,
  ADD_DEVELOPER_FAILURE,
  GET_ALL_DEVELOPERS_STARTED,
  GET_ALL_DEVELOPERS_SUCCESS,
  GET_ALL_DEVELOPERS_FAILURE,
  GET_ONE_DEVELOPER_STARTED,
  GET_ONE_DEVELOPER_SUCCESS,
  GET_ONE_DEVELOPER_FAILURE,
  DELETE_ONE_DEVELOPER_STARTED,
  DELETE_ONE_DEVELOPER_SUCCESS,
  DELETE_ONE_DEVELOPER_FAILURE,
} from "../constants/acion-types";

const initialState = {
  searchedWord: "",
  loading: false,
  error: null,
  developers: [],
  foundDevelopers:[],
  oneDeveloper: {},
  isDeveloperDeleted: false,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCHED_WORD:
      return { ...state, searchedWord: payload, foundDevelopers: getFoundDevelopers(state.developers, payload) };
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
      return { ...state, loading: false, error: null, developers: payload, foundDevelopers: getFoundDevelopers(payload, state.searchedWord)};
    case GET_ALL_DEVELOPERS_FAILURE:
      return { ...state, loading: false, error: payload.error };
    case GET_ONE_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case GET_ONE_DEVELOPER_SUCCESS:
      return { ...state, loading: false, error: null, oneDeveloper: payload };
    case GET_ONE_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };
    case DELETE_ONE_DEVELOPER_STARTED:
      return { ...state, loading: true, isDeveloperDeleted: false };
    case DELETE_ONE_DEVELOPER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isDeveloperDeleted: payload,
      };
    case DELETE_ONE_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

function getFoundDevelopers(developers, searchedWord){
  const foundDevelopers = developers.filter((item)=>{
    return (item.name.includes(searchedWord) || 
            item.email.includes(searchedWord) || 
            item.username.includes(searchedWord) || 
            item.phone.includes(searchedWord))
  })
  return foundDevelopers;
}

export default rootReducer;
