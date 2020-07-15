import {SET_SEARCHED_WORD, GET_ALL_DEVELOPERS} from '../constants/acion-types';

export function setSearchedWord(payload){
  return {type: SET_SEARCHED_WORD, payload}
}

export function getAllDevelopers(payload){
  return {type: GET_ALL_DEVELOPERS, payload}
}