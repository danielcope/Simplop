import React, { Component } from 'react'
import Header from './Header'


class Home extends Component {
  constructor (){
    super();
    this.state = {
}
}

  render(){
    return (
      <div>
        <Header />
        <h1>Welcome to Simplop</h1>
      </div>
      
    )
  }
}

export default Home