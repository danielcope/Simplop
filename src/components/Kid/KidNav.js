import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { updateUser,logout } from '../../redux/parentReducer'
import { connect } from 'react-redux'
import axios from 'axios';


class Nav extends Component {
  constructor () {
    super();
    this.state = {
      username:'',
      navMenu:false
    }
  }

  logout = () => {
    axios.delete( '/auth/logout', this.state )
    .then(res => this.props.logout)
  }
  

  render () {
    return (
      <div>
        <div className='nav-menu'>
          <Link to='/trends/:id'>Trends</Link>
          <Link to='/notification' className='nav-not'>Notifications</Link>
          <Link to='/' onClick={this.props.logout} className='nav-logout'>Logout</Link>
        </div>
      </div>
    )
  }
}
export default connect (null, {updateUser,logout}) (Nav)