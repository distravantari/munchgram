import * as types from './action-types'

// START TOKEN
export function getToken(token) {
  return {
    type: types.GET_TOKEN,
    token
  }
}

export function getAllToken(token) {
  return dispatch => {
    dispatch(getToken(token))
  }
}
// END TOKEN

// START ID
export function getId(id) {
  return {
    type: types.GET_ID,
    id
  }
}

export function getAllId(id) {
  return dispatch => {
    dispatch(getId(id))
  }
}
// END ID

// START USERNAME
export function getUsername(name) {
  return {
    type: types.GET_USERNAME,
    name
  }
}

export function getAllUsername(name) {
  return dispatch => {
    dispatch(getUsername(name))
  }
}
// END USERNAME
