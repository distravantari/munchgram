import React from 'react'
import Modal from 'react-modal'

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

                <form>

                  <div className="input-group input-block">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="username" id="username-login" placeholder="Username" required/>
                  </div>

                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope"></i>
                    </span>
                    <input type="email" className="form-control" name="email" id="password-login" placeholder="email" required/>
                  </div>

                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input type="password" className="form-control" name="password" id="password-login" placeholder="Password" required/>
                  </div>

                  {/*LOGIN button*/}
                  <input className="btn btn-default btn-block" value="Register" />
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
