import { combineReducers } from 'redux'

// Reducers
import userReducer from './user-reducer'
// import balanceReducer from './balance-reducer'
// import cookiesReducer from './cookies-reducer'
// import languageReducer from './language-reducer'

// Combine Reducers
// var reducers = combineReducers({
    // userState: userReducer,
    // balanceState: balanceReducer,
    // cookiesState: cookiesReducer,
    // languageState: languageReducer
// });

// one Reducers
var reducers = userReducer

export default reducers
