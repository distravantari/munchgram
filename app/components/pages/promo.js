import React from 'react'

import UpperSection from '../section-promo/upper-section' //promotion,most popular food,latest news,most discuss post
import LowerSection from '../section-promo/lower-section' //Popular resto, Popular Food, Latest Comment

class Promo extends React.Component{
  render(){
    return(
      <div>
        {/*INDEX SECTION*/}
        <div className="main">
          {/*promotion,most popular food,latest news,most discuss post*/}
          <UpperSection />
          {/*Popular resto, Popular Food, Latest Comment*/}
          <LowerSection />
        </div>
        {/*END INDEX SECTION*/}
      </div>
    )
  }
}

export default Promo
