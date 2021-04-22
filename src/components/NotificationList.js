import axios from 'axios';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateNotification} from '../redux/notificationReducer'


class NotificationList extends Component {
  constructor (){
    super();
    this.state = {
    }
  }

  deleteNotification = (notification_id) => {

    axios.delete(`/api/notification/${notification_id}`)
    .then(res=>this.props.getNotification())
  }
  

  render(){


    const mappedNotification = this.props.notificationReducer.notification.map((ele,i) => (
      <div key={ele.notification_id} className='notification-element' >
        <div>
        <span className='blah' onClick={e => this.deleteNotification(ele.notification_id)}>X</span>
        <span>{ele.notification_hour}:{ele.notification_min} {ele.am_pm}</span>
        </div>
      </div>
    ))


    return (
      <div >
        <h2 className='current-notification'>Current Notifications</h2>
        {mappedNotification}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect (mapStateToProps, {updateNotification})(NotificationList)