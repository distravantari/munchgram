import React from 'react'
import { Alert,Button } from 'react-bootstrap'

import { checkToken } from '../../utils/authentication/auth'// import logout function

class alert extends React.Component{
  constructor(props,context){
    super(props)
    context.router
    this.state = {
      alertVisible: true
    }
  }
  componentDidMount(){
    // console.log(checkToken())
    checkToken() == 'login' && this.setState({alertVisible: false}) // if not yet login, no complete profile alert
  }
  handleAlertDismiss() {
    this.setState({ alertVisible: false })
  }
  handleAlertShow() {
    this.setState({ alertVisible: true })
  }
  render(){
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={() => this.handleAlertDismiss()}>
          <h4>Oh snap! You haven't complete your profile!</h4>
          <p>Please click this link:<a href="#"> http://www.munchgram.com/</a> or the button bellow to complete your profile</p> <br/>
          <p>
            <Button bsStyle="danger">Complete your profile</Button>
            <span> or </span>
            <Button onClick={() => this.handleAlertDismiss()}>Ask me later</Button>
          </p>
        </Alert>
      )
    }

    return (
      <div></div>
    )
  }
}

export default alert
