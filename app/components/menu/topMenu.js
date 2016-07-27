import React from 'react'
import { Link } from 'react-router'

import LoginModal from '../modal/login' // import login modal
import { logout,checkToken } from '../../utils/authentication/auth'// import logout function

class topMenu extends React.Component{
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      loginModal: false
    }
  }
  signout(val){
    val.preventDefault() //prevent page from loading
    logout() // clear all data
  }
  render(){
    let loginModalClose = () => this.setState({ loginModal: false }) //close loginModal

    // Set log button to login/logout
    let logButton = ''
    if (checkToken() == 'login') {
      logButton = <li onClick={()=>this.setState({ loginModal: true })} ><a href="#">Login</a></li> //set log button (login)
    }else{
      logButton = <li onClick={(val)=>this.signout(val)} ><a href="#">Logout</a></li> //set log button (logout)
    }
    // END of Set log button to login/logout

    return(
      <div className="container">
        <Link to='/' className="logo">
          <img src="assets/img/logo/logo_inline.png" alt="logo" />
        </Link>

        {/*<!--TOP MENU-->*/}
        <nav className="clearfix">
          <a href="#" id="header-menu-button"><i className="fa fa-bars"></i></a>
          <ul className="list-inline">
            <li><Link to='/'>Home</Link></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
            { logButton }
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
