import React from 'react'

import UpperSection from '../section-index/upper-section' //promotion,most popular food,latest news,most discuss post
import FoodList from '../section-index/food-list'
import LowerSection from '../section-index/lower-section' //Popular resto, Popular Food, Latest Comment
import RecentUpdate from '../section-index/recent-update'

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
