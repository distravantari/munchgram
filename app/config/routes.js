import React from 'react'

import Main from '../components/Main'

// START CHILDREN
import Index from '../components/pages/index'
import Promo from '../components/pages/promo'
import ContactUs from '../components/pages/contact-us'
import AboutUs from '../components/pages/about-us'
import NotFoundRoute from '../components/pages/404'
// END CHILDREN

import { Router, Route, IndexRoute, BrowserHistory, useRouterHistory } from 'react-router'

import { createHashHistory } from 'history'

const history = useRouterHistory(createHashHistory)({ queryKey: false })

export default (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Main}>
      <Route path="promo/" component={Promo} />
      <Route path="contact-us/" component={ContactUs} />
      <Route path="about-us/" component={AboutUs} />
      <Route path="*" component={NotFoundRoute} />
      <IndexRoute component={Index}/>
    </Route>
  </Router>
)
