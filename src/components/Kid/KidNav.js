import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { updateUser,logout } from '../../redux/parentReducer'
import { connect } from 'react-redux'

const Nav = (props) => {

  const [menu,flipMenu] = useState(false)  
  
    return (
      <div className='kid-nav-section'>

        <span className='kid-nav-ham' onClick={() => flipMenu(!menu)} >&equiv;</span>

        <div className={ menu ? 'nav-menu-opened' : 'nav-menu-closed'}>
          <Link to='/notification' className='kid-nav-notification'>Notifications</Link>
          <Link to='/' className='kid-nav-logout' onClick={props.logout}>Logout</Link>
        </div>


      </div>
    )

  }

export default connect (null, {updateUser,logout}) (Nav)