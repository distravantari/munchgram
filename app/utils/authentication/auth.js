require('es6-promise').polyfill() // for IE

import axios from 'axios'
import host from '../host'
import md5 from 'md5'

// redux
import store from '../../store'
import { getToken } from '../../action/user-action'
// end of redux

// generate a jwt-token
function apitokenauth(username,password) {
  return axios({
    method: 'post',
    url: `${host()}/apitokenauth/`,
    data: {
      username: md5(username),
      password: password
    }
  })
}

// put token to redux (user-action 'GET_TOKEN')
function getToken(username,password){
  apitokenauth(username,password) // call apitokenauth function
  .then((res) => {
    store.dispatch(getToken()) //store token to redux
  })
}

export default function login(username,password,token) {
  return axios({
    method: 'post',
    url: `${host()}/setlogin/`,
    headers: {
      authorization: 'jwt '+token
    },
    data: {
      username: md5(username),
      password: password
    }
  })
}

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
