import React from 'react'

import Header from './header'
import Alert from './alert/isProfileComplete'
import MainMenu from './menu/mainMenu'
import UpperSection from './main-section/upper-section' //promotion,most popular food,latest news,most discuss post
import FoodList from './main-section/food-list'
import LowerSection from './main-section/lower-section' //Popular resto, Popular Food, Latest Comment
import RecentUpdate from './main-section/recent-update'
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

          {/*MAIN SECTION*/}
          <div className="main">
            {/*promotion,most popular food,latest news,most discuss post*/}
            <UpperSection />
            {/*Food List*/}
            <FoodList />
            {/*Popular resto, Popular Food, Latest Comment*/}
            <LowerSection />
            {/*Munchgram Recent Update*/}
            <RecentUpdate />
          </div>
          {/*END MAIN SECTION*/}

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
