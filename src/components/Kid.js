import React, { Component } from 'react'
import Nav from './Nav'
import AddKid from './AddKid'
import Header from './Header'
import axios from 'axios'


class Kid extends Component {
  constructor () {
    super ();
    this.state = {
      username:''
    }
  }

  componentDidMount = () => {
    this.getUser()
  }

  getUser = () => {
    axios.get( '/auth/parent' )
    .then(res => 
    this.setState({ username:res.data.username })
    )
  }
  

  render () {

    console.log(this.state);

    return (
      <div>
        <Header />
        <Nav />
        <AddKid />
      </div>

    )
  }
}

export default Kid