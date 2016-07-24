import React from 'react'
import Modal from 'react-modal'

import login,{ register } from '../../utils/authentication/auth'

const customStyles = {
  content : {
    background: 'transparent',
    border    : 'transparent'
  }
}

class RegisterModal extends React.Component{
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      registerModal: false
    }
  }
  handleRegister(val){
    val.preventDefault() // prevent page from loading

    // start register API
    register(this.usernameRef.value,this.passwordRef.value,this.emailRef.value)
    .then((res) => {
      alert(`Thanks for Registering, ${this.usernameRef.value}`) // response for user
      login(this.usernameRef.value,this.passwordRef.value) // imidietly login
    })
    .catch((res) => {
      alert(res.data.message) // username already exist alert
    })
    // end register API

  }
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.show}
          onRequestClose={this.props.onHide}
          style={customStyles}>

          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={this.props.onHide}>×</button>
                <h3>Register</h3>
              </div>
              <div className="modal-body">

                <form onSubmit={(val) => this.handleRegister(val)}> {/*on enter or click, the form will be sent*/}

                  <div className="input-group input-block">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="username" id="username-login" placeholder="Username" ref={(ref) => this.usernameRef = ref}/>
                  </div>

                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input type="email" className="form-control" name="email" id="email-login" placeholder="email" ref={(ref) => this.emailRef = ref}/>
                  </div>

                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input type="password" className="form-control" name="password" id="password-login" placeholder="Password" ref={(ref) => this.passwordRef = ref}/>
                  </div>

                  {/*LOGIN button*/}
                  <input type="submit" className="btn btn-default btn-block" value="Register" />
                </form>

                <a href="#"></a>
              </div>
            </div>
          </div>

        </Modal>
      </div>
    )
  }
}

export default RegisterModal
