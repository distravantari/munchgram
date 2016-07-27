import React from 'react'

class contain extends React.Component{
  render(){
    return(
      <div className="row">
				{/*<!--CONTENT-->*/}
				<div className="contact-us col-md-9 col-sm-12">
					<h2>Contact us</h2>
					<div className="row">
						<div className="map col-md-12 col-sm-12">
							<iframe src="https://www.google.com.ua/maps?f=d&amp;source=s_d&amp;saddr=48.209746,16.348501&amp;daddr=&amp;hl=uk&amp;geocode=&amp;sll=48.209575,16.365509&amp;sspn=0.033404,0.084543&amp;mra=mift&amp;mrsp=0&amp;sz=14&amp;ie=UTF8&amp;t=m&amp;z=13&amp;output=embed"></iframe>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6 col-sm-6">
							<h3>Contact details</h3>
							<ul className="contact-details">
								<li>
									<i className="fa fa-map-marker"></i>
									<div>
										<p>33 Broadway Steet, Suite 32, New York</p>
										<p>NY 1812 United States</p>
									</div>
								</li>
								<li>
									<i className="fa fa-phone"></i>
									<div>
										<p>+2 (555) 6498-241-2548</p>
										<p>+2 (555) 6498-241-2543</p>
									</div>
								</li>
								<li>
									<i className="fa fa-envelope-o"></i>
									<div>
										<p><span>Email:</span> envato@mail.com</p>
										<p>themeforest@mail.com</p>
									</div>
								</li>
								<li>
									<i className="fa fa-facebook"></i>
									<div>
										<p><span>Facebook:</span> www.facebook.com/modarama</p>
										<p>www.facebook.com/modarama_magazine</p>
									</div>
								</li>
							</ul>
						</div>
						<div className="contact-form col-md-6 col-sm-6">
							<h3>Get in touch</h3>
							<form method="post" id="contact" name="contact">
								<div className="row">
						    		<div className="col-md-6 col-sm-6 input-group">
									  	<span className="input-group-addon">
									  		<i className="fa fa-user"></i>
									  	</span>
									  	<input type="text" className="form-control" name="name" id="name" placeholder="Name (required)" required />
									</div>
						    		<div className="col-md-6 col-sm-6 input-group">
									  	<span className="input-group-addon">
									  		<i className="fa fa-envelope-o add-on"></i>
									  	</span>
									  	<input type="email"  className="form-control" name="email" id="email" placeholder="Email (required)" required />
									</div>
								</div>
								<div className="row">
									<div className="col-md-12 col-sm-12">
										<textarea className="form-control" name="message" id="message" required placeholder="Message" rows="9"></textarea>
									</div>
								</div>
					    		<input className="btn btn-default" id="submit" type="submit" name="submit" value="Send" />
					    	</form>

					    	<div className="alert alert-danger">
							  	<button type="button" className="close" data-dismiss="alert">&times;</button>
							  	<strong>Oh snap!</strong> Change a few things up and try submitting again.
							</div>

							<div className="alert alert-success">
							  	<button type="button" className="close" data-dismiss="alert">&times;</button>
							  	<strong>Well done!</strong> Your message was sent succssfully!
							</div>
						</div>
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

					<div className="flickr col-md-12 col-sm-6">
						<h4>Flickr photostream</h4>
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
			</div>
    )
  }
}

export default contain
