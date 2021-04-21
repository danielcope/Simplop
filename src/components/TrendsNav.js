import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/parentReducer'
import {connect} from 'react-redux'

const TrendsNav = (props) => {

  const [menu,flipMenu] = useState(false)

  return (
    
    <div className='event-nav-section'>
  
      <span className='event-nav-ham' onClick={()=> flipMenu(!menu)}>&equiv;</span>
      
    
      <div className={menu ? 'event-nav-menu-opened' : 'event-nav-menu-closed'}>
        <Link to='/kid' className='event-nav'>Home</Link>
        <Link to='/notification' className='event-nav' >Notifications</Link>
        <Link to='/' className='event-nav' onClick={props.logout}>Logout</Link>
      </div>
      
    

    </div>
  
  )
}

export default connect (null, {logout})(TrendsNav)