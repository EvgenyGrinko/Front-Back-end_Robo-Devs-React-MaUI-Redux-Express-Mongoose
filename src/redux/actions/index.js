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
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export function setSearchedWord(payload) {
  return { type: SET_SEARCHED_WORD, payload };
}

// export function getAllDevelopers(payload) {
//   return { type: GET_ALL_DEVELOPERS, payload };
// }

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

export const getAllDevelopers = () => {
  return async (dispatch) => {
    dispatch(getDeveloperStarted());

    await axios.get(url).then((res) => {
      dispatch(getDevloperSuccess(res.data)).catch((err) => {
        dispatch(getDevloperFailure(err.message));
        // throw new Error('NOT!');
      });
    });
  };
};

const getDeveloperStarted = () => ({ type: GET_DEVELOPER_STARTED });
const getDevloperSuccess = (dev) => ({
  type: GET_DEVELOPER_SUCCESS,
  payload: {
    dev,
  },
});

const getDevloperFailure = (error) => ({
  type: GET_DEVELOPER_FAILURE,
  payload: {
    error,
  },
});
