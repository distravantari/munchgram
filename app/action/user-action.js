import * as types from '../actions/action-types';

export function getToken(token) {
  return {
    type: types.GET_TOKEN,
    users
  };
}

//for IE user
export function getAllToken(token) {
  return dispatch => {
    dispatch(getUsers(token))
  }
}
