import React from 'react'
import Modal from 'react-modal'

import RegisterModal from './register'
import login from '../../utils/authentication/auth'

const customStyles = {
  content : {
    background: 'transparent',
    border    : 'transparent'
  }
}

class LoginModal extends React.Component{
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      registerModal: false
    }
  }
  register(){
    this.setState({ RegisterModal: true })
    this.props.onHide() //close LoginModal
  }
  handleLogin(val){
    val.preventDefault() // prevent page from loading

    // start login API
    login(this.usernameRef.value,this.passwordRef.value)
    // end login API
  }
  render() {
    let RegisterModalClose = () => this.setState({ RegisterModal: false }) //close RegisterModal

    return (
      <div className="modal fade">
        <Modal
          isOpen={this.props.show}
          onRequestClose={this.props.onHide}
          style={customStyles}>

          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.props.onHide}>×</button>
                <h3>Login</h3>
              </div>
              <div className="modal-body">

                <form onSubmit={(val) => this.handleLogin(val)}>
                  <div className="input-group input-block">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="username" id="username-login" placeholder="Username" ref={(ref) => this.usernameRef = ref}/>
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input type="password" className="form-control" name="password" id="password-login" placeholder="Password" ref={(ref) => this.passwordRef = ref}/>
                  </div>

                  {/*LOGIN button*/}
                  <input type="submit" className="btn btn-default btn-block" value="Login" />
                  <input className="btn btn-facebook btn-block" value="Login with Facebook" />
                  <input className="btn btn-google btn-block" value="Login with Google" />
                  {/*end LOGIN button*/}
                </form>

                <a href="#">Lost your password?</a>
              </div>
              <div className="modal-footer">
                <p>Not a member? <a href="#" onClick={()=> this.register()} >Register</a></p> {/*go to register modal*/}
              </div>
            </div>
          </div>

        </Modal>

        {/*START RegisterModal*/}
          <RegisterModal show={this.state.RegisterModal} onHide={RegisterModalClose} />
        {/*END RegisterModal*/}
      </div>
    )
  }
}

export default LoginModal
