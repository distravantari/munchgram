import React from 'react'

import UpperSection from '../index-section/upper-section' //promotion,most popular food,latest news,most discuss post
import FoodList from '../index-section/food-list'
import LowerSection from '../index-section/lower-section' //Popular resto, Popular Food, Latest Comment
import RecentUpdate from '../index-section/recent-update'

class Index extends React.Component{
  render(){
    return(
      <div>
        {/*INDEX SECTION*/}
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
        {/*END INDEX SECTION*/}
      </div>
    )
  }
}

export default Index
