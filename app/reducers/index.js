import { combineReducers } from 'redux'

// Reducers
import userReducer from './user-reducer'
// import balanceReducer from './balance-reducer'
// import cookiesReducer from './cookies-reducer'
// import languageReducer from './language-reducer'

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer
})

export default reducers
