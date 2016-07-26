import React from 'react'
import TopMenu from './menu/topMenu'

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <div className="row">
          <div className="about col-md-3 col-sm-6">
            <img src="assets/img/logo/logo_inline.png" alt="logo" />
            <h5>About Munchgram food magazine</h5>
            <p>
              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
            </p>

            <ul className="social list-inline">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
              <li><a href="#"><i className="fa fa-flickr"></i></a></li>
              <li><a href="#"><i className="fa fa-vimeo-square"></i></a></li>
              <li><a href="#"><i className="fa  fa-tumblr"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
            </ul>
          </div>

          <div className="categories col-md-3 col-sm-6">
            <h5>Categories</h5>
            <ul>
              <li><a href="#">Fashion (13)</a></li>
              <li><a href="#">Science (23)</a></li>
              <li><a href="#">Lifestyle (781)</a></li>
              <li><a href="#">Industry (14)</a></li>
              <li><a href="#">Inspiration (3)</a></li>
              <li><a href="#">Music (5)</a></li>
              <li><a href="#">Movies & Stars (32)</a></li>
            </ul>
          </div>

          <div className="events col-md-3 col-sm-6">
            <h5>Events</h5>
            <div className="event">
              <div className="col">
                <h1><a href="">21</a></h1>
                <p>nov</p>
              </div>
              <div className="info">
                <h2><a href="">Party monster 1954</a></h2>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit .</p>
              </div>
            </div>
            <div className="event">
              <div className="col">
                <h1><a href="">17</a></h1>
                <p>nov</p>
              </div>
              <div className="info">
                <h2><a href="">Party monster 1954</a></h2>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit .</p>
              </div>
            </div>
            <div className="event">
              <div className="col">
                <h1><a href="">25</a></h1>
                <p>nov</p>
              </div>
              <div className="info">
                <h2><a href="">Party monster 1954</a></h2>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit .</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Calendar</h5>
            <div className="calendar">
              <div className="header clearfix">
                <h1>November 2013</h1>
                <div className="calendar-nav">
                  <a href="#" className="prev"><i className="fa fa-angle-left"></i></a>
                  <a href="#" className="next"><i className="fa fa-angle-right"></i></a>
                </div>
              </div>
              <div className="calendar-body">
                <table>
                  <tr>
                    <td><a href="" className="prev-month">30</a></td>
                    <td><a href="" className="prev-month">31</a></td>
                    <td><a href="">1</a></td>
                    <td><a href="">2</a></td>
                    <td><a href="">3</a></td>
                    <td><a href="">4</a></td>
                    <td><a href="">5</a></td>
                  </tr>
                  <tr>
                    <td><a href="">6</a></td>
                    <td><a href="">7</a></td>
                    <td><a href="">8</a></td>
                    <td><a href="">9</a></td>
                    <td><a href="">10</a></td>
                    <td><a href="">11</a></td>
                    <td><a href="">12</a></td>
                  </tr>
                  <tr>
                    <td><a href="">13</a></td>
                    <td><a href="">14</a></td>
                    <td><a href="">15</a></td>
                    <td><a href="">16</a></td>
                    <td><a href="">17</a></td>
                    <td><a href="">18</a></td>
                    <td><a href="">19</a></td>
                  </tr>
                  <tr>
                    <td><a href="">20</a></td>
                    <td><a href="">21</a></td>
                    <td><a href="">22</a></td>
                    <td><a href="">23</a></td>
                    <td><a href="">24</a></td>
                    <td><a href="">25</a></td>
                    <td><a href="">26</a></td>
                  </tr>
                  <tr>
                    <td><a href="">27</a></td>
                    <td><a href="">28</a></td>
                    <td><a href="">29</a></td>
                    <td><a href="">30</a></td>
                    <td><a href="" className="next-month">1</a></td>
                    <td><a href="" className="next-month">2</a></td>
                    <td><a href="" className="next-month">3</a></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="rights clearfix">
          <p>© 2016 All rights reserved.</p>
          <p>Designed by <a href="http://node8.net/">Node8</a>.</p>
        </div>
      </footer>
    )
  }
}

export default Footer
