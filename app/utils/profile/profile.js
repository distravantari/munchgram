require('es6-promise').polyfill() // for IE

import axios from 'axios'
import host from '../host'
import store from '../../store' //redux-storage

export function isProfileComplete() { // checking wether the user profile is complete or not
  return axios({
    method: 'get',
    url: `${host()}/checkprofilecomplete/${store.getState().userState.id}/`,
    headers: {
      authorization: `jwt ${store.getState().userState.token}`
    }
  })
}
