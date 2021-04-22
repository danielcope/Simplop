import React, { Component } from 'react'
import NotificationList from './NotificationList'
import NotificationNav from './NotificationNav'
import NotificationHeader from './NotificationHeader'
import AddNotification from './AddNotification'
import axios from 'axios'
import { connect } from 'react-redux'
import {updateNotification} from '../redux/notificationReducer'


class Notification extends Component {


  componentDidMount = () => {
    this.getNotification()
  }

  getNotification = () => {
    axios.get(`/api/notification/${this.props.kidReducer.kid[0].parent_id}`)
    .then(res => {
      this.props.updateNotification(res.data)
      }
  )}


  render () {
    return (
      <div className='notification-view'>
        <div className='notification-top'>
          <NotificationHeader/>
          <NotificationNav/>
        </div>
        <div>
          <div className='notification-list'>
            <NotificationList getNotification={this.getNotification}/> 
          </div>
          <div>
            <AddNotification getNotification={this.getNotification} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=state=>state

export default connect(mapStateToProps, {updateNotification}) (Notification)