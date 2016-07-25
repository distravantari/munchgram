import React from 'react'

import Header from './header'
import Alert from './alert/isProfileComplete'
import MainMenu from './menu/mainMenu'

class Main extends React.Component{
  render(){
    return(
      <div>
        <Alert />
        <Header />
        {/*CONTAINER*/}
        <div className="container">
          <MainMenu />
        </div>
        {/*END OF CONTAINER*/}
      </div>
    )
  }
}

export default Main
