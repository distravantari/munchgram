require('es6-promise').polyfill() // for IE

import axios from 'axios'
import host from '../host'


export default function apitokenauth(username,password) {
  return axios({
    method: 'post',
    url: `${host()}/apitokenauth/`,
    data: {
      username: username,
      password: password
    }
  })
}

export function login(username,password) {
  return axios({
    method: 'post',
    url: `${host()}/setlogin/`,
    data: {
      username: username,
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
      password:password,
      email:email
    }
  })
}
