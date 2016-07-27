import React from 'react'

import Header from './header'
import Alert from './alert/isProfileComplete'
import MainMenu from './menu/mainMenu'
import Index from './pages/index'
import Footer from './footer'

class Main extends React.Component{
  render(){
    return(
      <div>
        <Alert />
        <Header />
        {/*CONTAINER*/}
        <div className="container">
          <MainMenu />

          {this.props.children}

          {/*START FOOTER*/}
          <Footer />
          {/*END FOOTER*/}
        </div>
        {/*END OF CONTAINER*/}

      </div>
    )
  }
}

export default Main
