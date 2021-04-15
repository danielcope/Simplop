import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { updateUser,logout } from '../redux/parentReducer'
import { connect } from 'react-redux'
import axios from 'axios';


class Nav extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  componentDidMount = () => {
    this.getUser()
  }

  getUser = () => {
    axios.get( '/auth/parent' )
    .then(res => this.props.updateUser(res.data))
  }

  logout = () => {
    axios.delete( '/auth/logout' )
    .then(res => this.props.logout)
  }

  render () {

    console.log('Nav',this.props)

    return (
      <div>
        RAWR
      </div>

    )
  }
}
export default connect (null, {updateUser,logout}) (Nav)