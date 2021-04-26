import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Suggestions extends Component {
  constructor (){
    super();
    this.state = {
}
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
            <input className='from-input' placeholder='enter your email' />
          </div>
          <input className='email-text'></input>
        </section>
      </section>
    )
  }
}

export default Suggestions