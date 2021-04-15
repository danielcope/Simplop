import React, { Component } from 'react'
import Nav from './Nav'
import AddKid from './AddKid'

class Kid extends Component {
  constructor () {
    super ();
    this.state = {

    }
  }

  // componentDidMount () {
    
  // }


  render () {
    return (
      <div>
        <Nav />
        <AddKid />
      </div>

    )
  }
}

export default Kid