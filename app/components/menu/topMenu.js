import React from 'react'
import LoginModal from '../modal/login'

class topMenu extends React.Component{
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      loginModal: false
    }
  }
  render(){
    let loginModalClose = () => this.setState({ loginModal: false }) //close loginModal

    return(
      <div className="container">
        <a href="#" className="logo">
          <img src="assets/img/logo/logo_inline.png" alt="logo" />
        </a>

        {/*<!--TOP MENU-->*/}
        <nav className="clearfix">
          <a href="#" id="header-menu-button"><i className="fa fa-bars"></i></a>
          <ul className="list-inline">
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            <li onClick={()=>this.setState({ loginModal: true })} ><a href="#">Login</a></li>
          </ul>
        </nav>
        {/*<!--END TOP MENU-->*/}

        {/*START LoginModal*/}
          <LoginModal show={this.state.loginModal} onHide={loginModalClose} />
        {/*END loginModal*/}
      </div>
    )
  }
}

export default topMenu
