import * as types from '../action/action-types';

const initialState = {
  token: {},
  id: {},
  username:{}
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_TOKEN:
      return Object.assign({}, state, { token: action.token })

    case types.GET_ID:
      return Object.assign({}, state, { id: action.id })

    case types.GET_USERNAME:
      return Object.assign({}, state, { username: action.name })
  }

  return state
}

export default userReducer;
