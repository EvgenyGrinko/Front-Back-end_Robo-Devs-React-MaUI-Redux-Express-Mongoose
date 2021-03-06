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
  EDIT_DEVELOPER_STARTED,
  EDIT_DEVELOPER_SUCCESS,
  EDIT_DEVELOPER_FAILURE,
} from "../constants/acion-types";

const initialState = {
  searchedWord: "",
  loading: false,
  error: null,
  developers: [],
  foundDevelopers: [],
  currentDeveloper: {},
  isDeveloperDeleted: false,
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_SEARCHED_WORD:
      return {
        ...state,
        searchedWord: payload,
        foundDevelopers: getFoundDevelopers(state.developers, payload),
      };
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
      return {
        ...state,
        loading: false,
        error: null,
        developers: payload,
        foundDevelopers: getFoundDevelopers(payload, state.searchedWord),
      };
    case GET_ALL_DEVELOPERS_FAILURE:
      return { ...state, loading: false, error: payload.error };
    case GET_ONE_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case GET_ONE_DEVELOPER_SUCCESS:
      return { ...state, loading: false, error: null, currentDeveloper: payload };
    case GET_ONE_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };
    case DELETE_ONE_DEVELOPER_STARTED:
      return { ...state, loading: true, isDeveloperDeleted: false };
    case DELETE_ONE_DEVELOPER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        developers: payload,
        foundDevelopers: getFoundDevelopers(payload, state.searchedWord),
      };
    case DELETE_ONE_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };
    case EDIT_DEVELOPER_STARTED:
      return { ...state, loading: true };
    case EDIT_DEVELOPER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        developers: updateDevelopers(state.developers, payload),
        foundDevelopers: getFoundDevelopers(
          updateDevelopers(state.developers, payload),
          state.searchedWord
        ),
      };
    case EDIT_DEVELOPER_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

function getFoundDevelopers(developers, searchedWord) {
  const foundDevelopers = developers.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchedWord.toLowerCase()) ||
      item.email.toLowerCase().includes(searchedWord.toLowerCase()) ||
      item.username.toLowerCase().includes(searchedWord.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchedWord.toLowerCase())
    );
  });
  return foundDevelopers;
}

function updateDevelopers(developers, updatedDeveloper) {
  const updatedDevelopers = [];
  developers.forEach((item) => {
    if (updatedDeveloper._id === item._id) updatedDevelopers.push(item);
    else updatedDevelopers.push(item);
  });
  return updatedDevelopers;
}

export default rootReducer;
