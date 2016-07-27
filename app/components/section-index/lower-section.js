import React from 'react'

class contain extends React.Component{
  render(){
    return(
      <div className="category row">
        {/*<!--CATEGORY SECTION-->*/}
        <div className="col-md-9 col-sm-12">
          <h3>Popular Restaurant</h3>
          <div className="row">
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
                <h1><a href="">Somewhere In Europe</a></h1>
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
                <h1><a href="">Fishing Nowadays</a></h1>
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
                <h1><a href="">NY City Pabs</a></h1>
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
          {/*<!--TABS-->*/}
          <div className="row">
            <div className="col-md-12 col-sm-12">
                    <ul id="Tabs" className="nav nav-tabs">
                        <li className="active"><a href="#fasion" data-toggle="tab">Indonesian Food</a></li>
                        <li><a href="#science" data-toggle="tab">Mexican Food</a></li>
                        <li><a href="#lifestyle" data-toggle="tab">Indian Food</a></li>
                        <li><a href="#music" data-toggle="tab">Vietnamese Food</a></li>
                        <li><a href="#movies" data-toggle="tab">Mongolian Food</a></li>
                    </ul>
                    <div id="TabContent" className="tab-content">
                        <div className="tab-pane fade active in" id="fasion">
                          <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Miami Woman Fashion</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">UK Fashion Week</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Hipster Stuff</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Designer Stuff</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Columbia New Protection System</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">The Best Online Stores</a></h1>
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
                        <div className="tab-pane fade" id="science">
                          <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">The Predictive Power of Big Data</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Fishing Nowadays</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
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
                  </div>
                  <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Neo Science</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">History Dont Sleep</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Unreal Nature</a></h1>
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
                        <div className="tab-pane fade" id="lifestyle">
                          <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Miami Men Fashion</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Miami Women Fashion</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
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
                  </div>
                  <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Bicycle Protection</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Garden Secrets 2</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
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
                        </div>
                        <div className="tab-pane fade" id="music">
                          <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Guitar Garage Band</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">iPhone 5s Review</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Iceland</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Rain Rain Rain</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">The Predictive Power of Big Data</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href=""> lifestyle</a>
                        </p>
                        <h1>Moto X Drop Test</h1>
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
                        <div className="tab-pane fade" id="movies">
                          <div className="row">
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Ukrainian Revolution</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Unreal Nature</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Miami Men Fashion</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">The Best Tourists Places 2014</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Fishing Nowadays</a></h1>
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
                    <article className="col-md-4 col-sm-4 small">
                      <img src="assets/img/small.jpg" alt="post" />
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Street Journey</a></h1>
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
              </div>
            </div>
          </div>
          {/*<!--END TABS-->*/}
        </div>
        {/*<!--END CATEGORY SECTION-->*/}

        {/*<!--SIDEBAR-->*/}
        <aside className="col-md-3 col-sm-12">

          <div className="most-trending col-md-12 col-sm-6">
            <h4>Most trending posts</h4>
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                        <div className="nav-icon">
                          <i className="fa fa-plus-square"></i>
                          <i className="fa fa-minus-square"></i>
                        </div>
                        <h1>Calligraphy On Girls</h1>
                      </a>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in">
                      <div className="panel-body">
                        <article className="small clearfix">
                      <div className="img">
                        <img src="assets/img/small.jpg" alt="post" />>
                        <div className="overlay"></div>
                      </div>
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Calligraphy On Girls</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        <a href="">Read more<i className="fa fa-align-left"></i></a>

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
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className="collapsed">
                        <div className="nav-icon">
                          <i className="fa fa-plus-square"></i>
                          <i className="fa fa-minus-square"></i>
                        </div>
                        <h1>Coffee Cup</h1>
                      </a>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        <article className="small clearfix">
                      <div className="img">
                        <img src="assets/img/small.jpg" alt="post" />>
                        <div className="overlay"></div>
                      </div>
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Coffee Cup</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        <a href="">Read more<i className="fa fa-align-left"></i></a>

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
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">
                        <div className="nav-icon">
                          <i className="fa fa-plus-square"></i>
                          <i className="fa fa-minus-square"></i>
                        </div>
                        <h1>This Week In Pictures</h1>
                      </a>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse">
                      <div className="panel-body">
                        <article className="small clearfix">
                      <div className="img">
                        <img src="assets/img/small.jpg" alt="post" />>
                        <div className="overlay"></div>
                      </div>
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">This Week In Pictures</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        <a href="">Read more<i className="fa fa-align-left"></i></a>
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
              </div>
              <div className="panel panel-default">
                  <div className="panel-heading">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" className="collapsed">
                        <div className="nav-icon">
                          <i className="fa fa-plus-square"></i>
                          <i className="fa fa-minus-square"></i>
                        </div>
                        <h1>Garden Secrets</h1>
                      </a>
                  </div>
                  <div id="collapseFour" className="panel-collapse collapse">
                      <div className="panel-body">
                        <article className="small clearfix">
                      <div className="img">
                        <img src="assets/img/small.jpg" alt="post" />">
                        <div className="overlay"></div>
                      </div>
                      <div className="info">
                        <p className="tags">
                          <a href="">Science</a>
                          <a href="">lifestyle</a>
                        </p>
                        <h1><a href="">Garden Secrets</a></h1>
                        <p className="details">Sep 25, 2013 | <a href="author.html">Alex Grosville</a></p>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        <a href="">Read more<i className="fa fa-align-left"></i></a>
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
              </div>
            </div>
          </div>

          <div id="twitter" className="col-md-12 col-sm-6">
            <h4>Latest comments</h4>
            <div>
              <a className="twitter-timeline" href="https://twitter.com/envato" data-widget-id="400278156189237248" data-link-color="#f1284e" data-chrome="noheader nofooter   noscrollbar" lang="EN" data-tweet-limit="2">
                @envato
              </a>
              {/*<script>
                !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
              </script>*/}
            </div>
          </div>
        </aside>
        {/*<!--END SIDEBAR-->*/}
      </div>
    )
  }
}

export default contain


{/**/}
