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
