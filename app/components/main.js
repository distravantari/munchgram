import React from 'react'

import Header from './header'
import Alert from './alert/isProfileComplete'

class Main extends React.Component{
  render(){
    return(
      <div>
        <Alert />
        <Header />
      </div>
    )
  }
}

export default Main
