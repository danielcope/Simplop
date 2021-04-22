import React from 'react'
import NotificationList from './NotificationList'
import NotificationNav from './NotificationNav'
import NotificationHeader from './NotificationHeader'
import AddNotification from './AddNotification'

const Notification  = () => {

  return (
    <div className='notification-view'>
      <div >
        <NotificationHeader/>
        <NotificationNav/>
      </div>
      <div>
        <div>
          <NotificationList/> 
        </div>
        <div>
          <AddNotification/>
        </div>
      </div>
    </div>
    )
  }

export default Notification