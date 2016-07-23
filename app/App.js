import 'babel-polyfill' // for IE
import React from 'react'
import ReactDOM from 'react-dom'
// import { Router } from 'react-router'

// start redux
import { Provider } from 'react-redux'
import store from './store'
// end of redux

import routes from './config/routes'

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('app')
)
