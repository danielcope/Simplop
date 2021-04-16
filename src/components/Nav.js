import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateUser,logout } from '../redux/parentReducer'
import { connect } from 'react-redux'
import axios from 'axios';


class Nav extends Component {
  constructor () {
    super();
    this.state = {
      username:''
    }
  }

  logout = () => {
    axios.delete( '/auth/logout', this.state )
    .then(res => this.props.logout)
    console.log('logout',this.state);
  }
  
  render () {
    return (
      <div>
        <Link to='/' onClick={this.props.logout}>Logout</Link>
      </div>

    )
  }
}
export default connect (null, {updateUser,logout}) (Nav)