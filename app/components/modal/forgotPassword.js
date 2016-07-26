import React from 'react'
import Modal from 'react-modal'

import forgotpassword from '../../utils/password/pass'

const customStyles = {
  content : {
    background: 'transparent',
    border    : 'transparent'
  }
}

class forgotModal extends React.Component{
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      forgotModal: false
    }
  }
  handleForgot(val){
    val.preventDefault() // prevent page from loading

    // start forgotpassword API
    forgotpassword(this.usernameRef.value)
    .then((res) => {
      alert(`${res.data.message}, please check your email`)
      window.location.reload() // reload page after username click ok button on prompt
    })
    .catch((res) => {
      alert(res.data.message)
    })
    // end forgotpassword API

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
                <h3>Forgot Password</h3>
              </div>
              <div className="modal-body">

                <form onSubmit={(val) => this.handleForgot(val)}> {/*on enter or click, the form will be sent*/}

                  <div className="input-group input-block">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input type="text" className="form-control" name="username" id="username-login" placeholder="Username" ref={(ref) => this.usernameRef = ref}/>
                  </div>

                  <input type="submit" className="btn btn-default btn-block" value="Sent" />
                  <p>A password will be e-mailed to you.</p>

                </form>

              </div>
            </div>
          </div>

        </Modal>
      </div>
    )
  }
}

export default forgotModal
