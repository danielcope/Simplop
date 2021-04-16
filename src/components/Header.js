import React, { Component } from 'react'

class Header extends Component {
  constructor(){
    super()
    this.state = {
      username:''
    }
  }

  


render(){
  return (
    <div className="header">
      {this.state.username ? <h1>Welcome, {this.state.username}</h1> : ""}
    </div>

)
}
}

export default Header