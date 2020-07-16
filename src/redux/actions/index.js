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
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";

export function setSearchedWord(payload) {
  return { type: SET_SEARCHED_WORD, payload };
}

export const addDeveloper = ({ name, email, phone }) => {
  return (dispatch) => {
    dispatch(addDeveloperStarted());

    axios
      .post(url, {
        name,
        email,
        phone,
      })
      .then((res) => {
        setTimeout(() => {
          dispatch(addDevloperSuccess(res.data));
        }, 2500);
      })
      .catch((err) => {
        dispatch(addDevloperFailure(err.message));
        // throw new Error('NOT!');
      });
  };
};

const addDeveloperStarted = () => ({ type: ADD_DEVELOPER_STARTED });
const addDevloperSuccess = (dev) => ({
  type: ADD_DEVELOPER_SUCCESS,
  payload: {
    ...dev,
  },
});

const addDevloperFailure = (error) => ({
  type: ADD_DEVELOPER_FAILURE,
  payload: {
    error,
  },
});

export function getAllDevelopers() {
  return async (dispatch) => {
    try {
      dispatch(getAllDevelopersStarted());
      const { data } = await axios.get(url);
      dispatch(getAllDevlopersSuccess(data));
    } catch (err) {
      dispatch(getAllDevlopersFailure(err.message));
    }
  };
}

function getAllDevelopersStarted() {
  return { type: GET_ALL_DEVELOPERS_STARTED };
}
function getAllDevlopersSuccess(developers) {
  return {
    type: GET_ALL_DEVELOPERS_SUCCESS,
    payload: developers,
  };
}
function getAllDevlopersFailure(error) {
  return { type: GET_ALL_DEVELOPERS_FAILURE, payload: error };
}

// export function getOneDeveloper(id) {
//   return async (dispatch) => {
//     try {
//       dispatch(() => ({ type: GET_ONE_DEVELOPER_STARTED }));
//       const { data } = await axios.get(url + id);
//       dispatch(() => ({ type: GET_ONE_DEVELOPER_SUCCESS, payload: data }));
//     } catch (err) {
//       dispatch(() => ({
//         type: GET_ONE_DEVELOPER_FAILURE,
//         payload: err.message,
//       }));
//     }
//   };
// }

export function getOneDeveloper(id) {
  return async (dispatch) => {
    try {
      dispatch(getOneDeveloperStarted());
      const { data } = await axios.get(url + id);
      dispatch(getOneDevloperSuccess(data));
    } catch (err) {
      dispatch(getOneDevloperFailure(err.message));
    }
  };
}

function getOneDeveloperStarted() {
  return { type: GET_ONE_DEVELOPER_STARTED };
}
function getOneDevloperSuccess(developers) {
  return {
    type: GET_ONE_DEVELOPER_SUCCESS,
    payload: developers,
  };
}
function getOneDevloperFailure(error) {
  return { type: GET_ONE_DEVELOPER_FAILURE, payload: error };
}
