import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/parentReducer'
import {connect} from 'react-redux'

const TrendsNav = () => {

  return (
    <div>
      <Link to='/kid'>Home</Link>
      <Link to='/notification'></Link>
      <Link to='/'>Logout</Link>
    </div>

)
}

export default connect (null, {logout})(TrendsNav)