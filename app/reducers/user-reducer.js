import * as types from '../action/action-types';

const initialState = {
  token: {}
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {
    case types.GET_TOKEN:
      return Object.assign({}, state, { token: action.token })
  }

  return state
}

export default userReducer;
