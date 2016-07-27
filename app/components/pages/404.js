import React from 'react'

import UpperSection from '../section-contact/upper-section' //promotion,most popular food,latest news,most discuss post

class Promo extends React.Component{
  render(){
    return(
      <div>
        <div className="main-404 clearfix">
          <img src="assets/img/404.jpg" alt="404" />
          <div className="info-404">
            <h1>
              <span>404.</span>
              <small>That's an error.</small>
            </h1>
            <p>
              YOU BEING STUPID OR DISTRA IS STILL NOT FINISH
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Promo
