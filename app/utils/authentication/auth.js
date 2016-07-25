require('es6-promise').polyfill() // for IE

import axios from 'axios'
import host from '../host'
import md5 from 'md5'

// redux
import store from '../../store'
import { getToken,getId,getUsername } from '../../action/user-action'
// end of redux

// generate a jwt-token
function apitokenauth(username,password) {
  return axios({
    method: 'post',
    url: `${host()}/apitokenauth/`,
    data: {
      username: username,
      password: md5(password)
    }
  })
}
// end of generate token

// call login function
function signin(username,password,token){
  return axios({
    method: 'post',
    url: `${host()}/setlogin/`,
    headers: {
      authorization: `jwt ${token}`
    },
    data: {
      username: username,
      password: md5(password)
    }
  })
}
// end of login function

// call logout function
export function logout(){
  localStorage.clear() // clear all data that store to redux/ redux-locaStorage
  window.location.reload() // reload page
}
// end of logout function

// put token to redux (user-action 'GET_TOKEN') and directly go to signin function
export default function login(username,password){
  apitokenauth(username,password) // call apitokenauth function
  .then((res) => {
    store.dispatch(getToken(res.data.token)) //store token to redux
    store.dispatch(getUsername(username)) //store username to redux

    //call login API
    signin(username,password,res.data.token)
    .then((res) => {
      store.dispatch(getId(res.data.user_id))
      console.log(res.data.is_login)
      window.location.reload() //reload page
    })
    // end of login API
  })
  .catch((error) => {
    alert(error.data.detail)
  })
}

// check if token is exist
export function checkToken (){
  // console.log('store',store.getState().userState)
  let value = 'login'
  store.getState().userState.token.length > 0 ? value = 'logout' : value = value// if token exist, login change to logout
  // console.log('length',store.getState().userState.token.length)
  return value // return value (logout/login)
}
// end of check token

// call register API
export function register(username,password,email) {
  return axios({
    method: 'post',
    url: `${host()}/register/`,
    data: {
      username: username,
      password:md5(password),
      email:email
    }
  })
}
// end of call register API
