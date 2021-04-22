import React, {useState} from 'react'
import { connect } from 'react-redux'
import {logout} from '../redux/parentReducer'
import {Link} from 'react-router-dom'

const NotificationNav = (props) => {

  const [menu,flipMenu] = useState(false)

  return (
    <div className='notification-nav-section'>

      <span className='notification-nav-ham' onClick={() => flipMenu(!menu)}>&equiv;</span>

      <div className={menu ? 'notification-menu-opened' : 'notification-menu-closed'}>
        <Link to='/kid' className='event-nav'>Home</Link>
        <Link to='/' onClick={props.logout} className='event-nav' >Logout</Link>
      </div>


    </div>
)
}

export default connect(null,{logout}) (NotificationNav)