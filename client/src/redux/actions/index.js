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
import axios from "axios";

export function setSearchedWord(payload) {
  return { type: SET_SEARCHED_WORD, payload };
}

// export const addDeveloper = ({ name, email, phone }) => {
//   return (dispatch) => {
//     dispatch(addDeveloperStarted());
//     const url = "https://jsonplaceholder.typicode.com/users/";

//     axios
//       .post(url, {
//         name,
//         email,
//         phone,
//       })
//       .then((res) => {
//         setTimeout(() => {
//           dispatch(addDevloperSuccess(res.data));
//         }, 2500);
//       })
//       .catch((err) => {
//         dispatch(addDevloperFailure(err.message));
//         // throw new Error('NOT!');
//       });
//   };
// };

// const addDeveloperStarted = () => ({ type: ADD_DEVELOPER_STARTED });
// const addDevloperSuccess = (dev) => ({
//   type: ADD_DEVELOPER_SUCCESS,
//   payload: {
//     ...dev,
//   },
// });

// const addDevloperFailure = (error) => ({
//   type: ADD_DEVELOPER_FAILURE,
//   payload: {
//     error,
//   },
// });

export function getAllDevelopers() {
  return async (dispatch) => {
    try {
      dispatch(getAllDevelopersStarted());
      // const url = "https://jsonplaceholder.typicode.com/users/";
      const url = "/api/developers/";
      const { data } = await axios.get(url);
      dispatch(getAllDevlopersSuccess(data.developers));
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
//       const url = "https://jsonplaceholder.typicode.com/users/";
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
      // const url = "https://jsonplaceholder.typicode.com/users/";
      const url = "/api/developers/";
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

export function deleteOneDeveloper(id) {
  return async (dispatch) => {
    try {
      dispatch(deleteOneDeveloperStarted());
      // const url = "https://jsonplaceholder.typicode.com/users/";
      const url = "/api/developers/";
      const {
        data: { success },
      } = await axios.delete(url + id);
      dispatch(deleteOneDevloperSuccess(success));
    } catch (err) {
      dispatch(deleteOneDevloperFailure(err.message));
    }
  };
}

function deleteOneDeveloperStarted() {
  return { type: DELETE_ONE_DEVELOPER_STARTED };
}
function deleteOneDevloperSuccess(success) {
  return {
    type: DELETE_ONE_DEVELOPER_SUCCESS,
    payload: success,
  };
}
function deleteOneDevloperFailure(error) {
  return { type: DELETE_ONE_DEVELOPER_FAILURE, payload: error };
}

export function addDeveloper(developer) {
  return async (dispatch) => {
    try {
      dispatch(addDeveloperStarted());
      // const url = "https://jsonplaceholder.typicode.com/users/";
      const url = "/api/developers/";
      const { data } = await axios.post(url, developer);
      dispatch(addDeveloperSuccess(data.developer));
    } catch (err) {
      dispatch(addDeveloperFailure(err.message));
    }
  };
}

function addDeveloperStarted() {
  return { type: ADD_DEVELOPER_STARTED };
}
function addDeveloperSuccess(developer) {
  return {
    type: ADD_DEVELOPER_SUCCESS,
    payload: developer,
  };
}
function addDeveloperFailure(error) {
  return { type: ADD_DEVELOPER_FAILURE, payload: error };
}
