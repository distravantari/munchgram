import React from 'react'

class contain extends React.Component{
  render(){
    return(
      <div className="row">
        {/*<!--CONTENT-->*/}
        <div className="posts col-md-9 col-sm-12">
          {/*<!--BREAKING NEWS-->*/}
          <div className="row">
            <div className="breaking col-md-12 col-sm-12">
              <div className="controls">
                <p className="prev"><i className="fa fa-angle-left"></i></p>
                <p className="next"><i className="fa fa-angle-right"></i></p>
              </div>
              <ul className="news">
                <li>
                  PROMO: FACE Stockholm's New Special-Edition Bicycle and Nail Color Collaboration
                </li>
                <li>
                  <span>HOT: </span>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                </li>

                <li>
                  BREAKING: Jessica Chastain:Hollywood's Most Versatile Star
                </li>
              </ul>
            </div>
          </div>
          {/*<!--END BREAKING NEWS-->*/}
          <div className="row">
            <div className="post-slider col-md-8 col-sm-8">
              <div className="controls">
                <p className="prev"><i className="fa fa-angle-left"></i></p>
                <p className="next"><i className="fa fa-angle-right"></i></p>
              </div>
              <div className="slides">
                <article className="big clearfix">
                  <img src="assets/img/big.jpg" alt="post" />
                  <div className="info">
                    <p className="tags">
                      <a href="">Fashion</a>
                    </p>
                    <h1><a href="">What To Look Forward To In 2014</a></h1>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
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
                <article className="big clearfix">
                  <img src="assets/img/big.jpg" alt="post" />
                  <div className="info">
                    <p className="tags">
                      <a href="">Lifestyle</a>
                      <a href="">Fashion</a>
                    </p>
                    <h1><a href="">Playstation or Xbox</a></h1>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
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
                <article className="big clearfix">
                  <img src="assets/img/big.jpg" alt="post" />
                  <div className="info">
                    <p className="tags">
                      <a href="">Lifestyle</a>
                      <a href="">Fashion</a>
                    </p>
                    <h1><a href="">Urbanization</a></h1>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
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
            </div>
            <article className="col-md-4 col-sm-4 mid">
              <div className="img">
                <img src="assets/img/mid.jpg" alt="post" />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <p className="tags">
                  <a href="">Lifestyle</a>
                  <a href="">Fashion</a>
                </p>
                <h1><a href="">Most Popular Food 1</a></h1>
                <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
          <div className="row">
          <article className="col-md-4 col-sm-4 mid">
            <div className="img">
              <img src="assets/img/mid.jpg" alt="post" />
              <div className="overlay"></div>
            </div>
            <div className="info">
              <p className="tags">
                <a href="">Science</a>
                <a href="">lifestyle</a>
              </p>
              <h1><a href="">Most Popular Food 2</a></h1>
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
            <article className="col-md-4 col-sm-4 mid">
              <div className="img">
                <img src="assets/img/mid.jpg" alt="post" />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <p className="tags">
                  <a href="">Fashion</a>
                  <a href="">Inspiration</a>
                  <a href="">lifestyle</a>
                </p>
                <h1><a href="">Most Popular Food 3</a></h1>
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
            <article className="col-md-4 col-sm-4 mid">
              <div className="img">
                <img src="assets/img/mid.jpg" alt="post" />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <p className="tags">
                  <a href="">Science</a>
                  <a href="">lifestyle</a>
                </p>
                <h1><a href="">Most Popular Food 4</a></h1>
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
          <div className="row">
            <article className="col-md-4 col-sm-4 mid">
              <div className="img">
                <img src="assets/img/mid.jpg" alt="post" />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <p className="tags">
                  <a href="">Science</a>
                  <a href="">lifestyle</a>
                </p>
                <h1><a href="">Most Popular Food 5</a></h1>
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
            <article className="col-md-8 col-sm-8 big">
              <div className="img">
                <img src="assets/img/big.jpg" alt="post" />
                <div className="overlay"></div>
              </div>
              <div className="info">
                <p className="tags">
                  <a href="">Science</a>
                  <a href="">lifestyle</a>
                </p>
                <h1><a href="">LATEST NEWS</a></h1>
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

          <div className="banner visible-md visible-lg">
            <img src="assets/img/banner.jpg" alt="banner" />
          </div>

          <div className="hidden-xs hidden-sm hidden-md hidden-lg"></div>

          <div className="most-discussed col-md-12 col-sm-6">
            <h4>Most discussed posts</h4>
              <article className="small clearfix">
                <img src="assets/img/small.jpg" alt="post" />
                <div className="info">
                  <p className="tags">
                    <a href="">Science</a>
                    <a href="">lifestyle</a>
                  </p>
                  <h1><a href="">Trend Colours 2014</a></h1>
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
                <img src="assets/img/small.jpg" alt="post" />
                <div className="info">
                  <p className="tags">
                    <a href="">Science</a>
                    <a href="">lifestyle</a>
                  </p>
                  <h1><a href="">Couple Problems</a></h1>
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
                <img src="assets/img/small.jpg" alt="post" />
                <div className="info">
                  <p className="tags">
                    <a href="">Science</a>
                    <a href="">lifestyle</a>
                  </p>
                  <h1><a href="">Mismo Backpaks</a></h1>
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
            <a href="#" className="btn btn-default">View all</a>
          </div>

          <div className="flickr col-md-12 col-sm-6">
            <h4>Flickr photostream</h4>
          </div>
        </aside>
        {/*<!--END SIDEBAR-->*/}
      </div>
    )
  }
}

export default contain
