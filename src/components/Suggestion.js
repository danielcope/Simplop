import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Suggestions extends Component {
  constructor (){
    super();
    this.state = {
      email: '',
      emailText:''
}
}

  sendThanksEmail = () => {
    axios.post( '/send', {email:this.state.email} )
    .then(alert('email sent'))
  }

  sendFeedbackEmail = () => {
    const {email,emailText} = this.state

    axios.post( '/api/sendemail', {email:email,emailText:emailText} )
      .then()
  }

  handleEmailChange = (val) => {
    this.setState({ email: val })
  }

  handleEmailTextChange = (val) => {
    this.setState({ emailText: val })
  }


  render(){
    return (
      <section className='suggestion-view'>
        <span className='email-description'>Send us your suggestions!</span>
        <Link className='home-button' to='/kid'>Home</Link>
        <section className='email-container'>
          <span className='to-email'>To: Simplop Team</span>
          <div className='from-email'>
            <span>From: </span>
            <input className='from-input' placeholder='enter your email' onChange={e => this.handleEmailChange(e.target.value)} />
          </div>
          <input className='email-text' onChange={e => this.handleEmailTextChange(e.target.value)}></input>
          <button onClick={this.sendThanksEmail} onClick={this.sendFeedbackEmail}>Send</button>
        </section>
      </section>
    )
  }
}

export default Suggestions