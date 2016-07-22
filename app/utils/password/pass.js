require('es6-promise').polyfill() // for IE

import axios from 'axios'
import host from '../host'


export default function forgotpassword(username) {
  return axios({
    method: 'post',
    url: `${host()}/forgotpassword/`,
    data: {
      username: username
    }
  })
}

export function resetpassword(signature,password) {
  return axios({
    method: 'post',
    url: `${host()}/resetpassword/`,
    data: {
      signature: signature,
      new_password:password
    }
  })
}
