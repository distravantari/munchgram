import React from 'react'

import UpperSection from '../section-contact/upper-section' //promotion,most popular food,latest news,most discuss post

class Promo extends React.Component{
  render(){
    return(
      <div>
        <div className="row">
          {/*<!--CONTENT-->*/}
          <div className="col-md-9 col-sm-12">
            <h2>About us</h2>
            <div className="row">
              <div className="about-us col-md-12 col-sm-12">
                <img src="assets/img/about.jpg" alt="about" />
                <div className="info">
                  <h1><small>Who we are and what we do?</small></h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>

            <h3>Our team</h3>
            <div className="team row">
              <article className="col-md-4 col-sm-4 mid member">
                <div className="img">
                  <img src="assets/img/team.jpg" alt="post2" />
                  <div className="overlay"></div>
                </div>
                <div className="info">
                  <p className="tags">
                    <a href="">Founder</a>
                    <a href="">Ceo</a>
                  </p>
                  <h1><a href="author.html">Trevis Marshal</a></h1>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className="social list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa  fa-tumblr"></i></a></li>
                </ul>
              </article>
              <article className="col-md-4 col-sm-4 mid member">
                <div className="img">
                  <img src="assets/img/team.jpg" alt="post2" />
                  <div className="overlay"></div>
                </div>
                <div className="info">
                  <p className="tags">
                    <a href="">Founder</a>
                    <a href="">Ceo</a>
                  </p>
                  <h1><a href="author.html">Julia Stanford</a></h1>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className="social list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa  fa-tumblr"></i></a></li>
                </ul>
              </article>
              <article className="col-md-4 col-sm-4 mid member">
                <div className="img">
                  <img src="assets/img/team.jpg" alt="post2" />
                  <div className="overlay"></div>
                </div>
                <div className="info">
                  <p className="tags">
                    <a href="">Founder</a>
                    <a href="">Ceo</a>
                  </p>
                  <h1><a href="author.html">Alex Grosville</a></h1>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <ul className="social list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li><a href="#"><i className="fa  fa-tumblr"></i></a></li>
                </ul>
              </article>
            </div>

            <div className="statistic row">
              <ul className="statistic list-inline col-md-12 col-sm-12">
                <li>
                  <i className="fa fa-user"></i>
                  <h3>17,435</h3>
                  <p>Users</p>
                </li>
                <li>
                  <i className="fa fa-pencil-square-o"></i>
                  <h3>2,139</h3>
                  <p>Posts</p>
                </li>
                <li>
                  <i className="fa fa-comment"></i>
                  <h3>244,967</h3>
                  <p>Comments</p>
                </li>
                <li>
                  <i className="fa fa-download"></i>
                  <h3>239</h3>
                  <p>Downloads</p>
                </li>
                <li>
                  <i className="fa fa-picture-o"></i>
                  <h3>32,234</h3>
                  <p>Images</p>
                </li>
              </ul>
            </div>
          </div>
          {/*<!--END CONTENT-->*/}

          {/*<!--SIDEBAR-->*/}
          <aside className="col-md-3 col-sm-12">

            <ul className="aside-social list-inline visible-md visible-lg">
              <li>
                <i className="fa fa-facebook"></i>
                <p>162K</p>
              </li>
              <li>
                <i className="fa fa-twitter"></i>
                <p>73K</p>
              </li>
              <li>
                <i className="fa fa-google-plus"></i>
                <p>29K</p>
              </li>
              <li>
                <i className="fa fa-rss"></i>
                <p>9,012</p>
              </li>
            </ul>

            <div className="newsletter visible-md visible-lg">
              <h3>Newsletter</h3>
              <p>Subscribe to be the first to know our about sales, events and special offers!</p>
              <form action="POST">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <input type="submit" value="subscribe" className="btn btn-default btn-block" />
              </form>
            </div>

            <div className="archive categories col-md-12 col-sm-6">
              <h4>Archive</h4>
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

            <div className="most-commented col-md-12 col-sm-6">
              <h4>Most commented posts</h4>
              <article className="small clearfix">
                <div className="counter">
                  <i className="fa fa-comment"></i>
                  <p>74</p>
                </div>
                <div className="info">
                  <p className="tags">
                    <a href="">Science</a>
                    <a href="">lifestyle</a>
                  </p>
                  <h1><a href="">Ray Ban Experience</a></h1>
                  <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>

                </div>
                <ul className="counters list-inline">
                  <li>
                    <a href=""><i className="fa fa-eye"></i>15271</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-comment"></i>25</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-heart"></i>724</a>
                  </li>
                </ul>
              </article>

              <article className="small clearfix">
                <div className="counter">
                  <i className="fa fa-comment"></i>
                  <p>74</p>
                </div>
                <div className="info">
                  <p className="tags">
                    <a href="">Science</a>
                    <a href="">lifestyle</a>
                  </p>
                  <h1><a href="">Moto X Drop Test</a></h1>
                  <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>

                </div>
                <ul className="counters list-inline">
                  <li>
                    <a href=""><i className="fa fa-eye"></i>15271</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-comment"></i>25</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-heart"></i>724</a>
                  </li>
                </ul>
              </article>

              <article className="small clearfix">
                <div className="counter">
                  <i className="fa fa-comment"></i>
                  <p>74</p>
                </div>
                <div className="info">
                  <p className="tags">
                    <a href="">Science</a>
                    <a href="">lifestyle</a>
                  </p>
                  <h1><a href="">Lomography</a></h1>
                  <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>

                </div>
                <ul className="counters list-inline">
                  <li>
                    <a href=""><i className="fa fa-eye"></i>15271</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-comment"></i>25</a>
                  </li>
                  <li>
                    <a href=""><i className="fa fa-heart"></i>724</a>
                  </li>
                </ul>
              </article>
            </div>
          </aside>
          {/*<!--END SIDEBAR-->*/}
        </div>
      </div>
    )
  }
}

export default Promo
