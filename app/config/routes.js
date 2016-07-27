import React from 'react'

import Main from '../components/Main'

// START CHILDREN
import Index from '../components/pages/index'
import Promo from '../components/pages/promo'
// END CHILDREN

import { Router, Route, IndexRoute, BrowserHistory, useRouterHistory } from 'react-router'

import { createHashHistory } from 'history'

const history = useRouterHistory(createHashHistory)({ queryKey: false })

// const appHistory = createAppHistory({
//   parseQueryString: parse,
//   stringifyQuery: stringify
// })

export default (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Main}>
      <Route path="promo/" component={Promo} />
      <IndexRoute component={Index}/>
    </Route>
  </Router>
)
