import * as types from './action-types'

export function getToken(token) {
  return {
    type: types.GET_TOKEN,
    token
  };
}

//for IE user
export function getAllToken(token) {
  return dispatch => {
    dispatch(getToken(token))
  }
}
