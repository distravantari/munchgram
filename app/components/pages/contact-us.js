import React from 'react'

import UpperSection from '../section-contact/upper-section' //promotion,most popular food,latest news,most discuss post

class Promo extends React.Component{
  render(){
    return(
      <div>
        {/*INDEX SECTION*/}
        <div className="main">
          {/*promotion,most popular food,latest news,most discuss post*/}
          <UpperSection />
        </div>
        {/*END INDEX SECTION*/}
      </div>
    )
  }
}

export default Promo
