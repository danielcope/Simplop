import React, { Component } from 'react'
import NotificationList from './NotificationList'
import NotificationNav from './NotificationNav'
import NotificationHeader from './NotificationHeader'
import AddNotification from './AddNotification'
import axios from 'axios'
import { connect } from 'react-redux'
import {updateNotification} from '../redux/notificationReducer'


class Notification extends Component {
  constructor(){
    super();
    this.state = {
      currentTime: '',
      alarmTime: [],
    }
  }

  componentDidMount = async () => {
    await this.getNotification()
    this.getAlarmTime()

    this.clock = setInterval(
      () => this.setCurrentTime(),
      1000
    )
    this.interval = setInterval(
      () => this.checkAlarmClock(),
      1000 * 60)
  }

  setCurrentTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString('en-US')
    })
  }

  getNotification = async () => {
    await axios.get(`/api/notification/${this.props.kidReducer.kid[0].parent_id}`)
    .then(res => {
      this.props.updateNotification(res.data)
    }
  )}

  checkAlarmClock = () => {
    for (let i = 0; i < this.state.alarmTime.length; i++) {
      if (this.state.currentTime === this.state.alarmTime) {
        alert("It's time!!")
      } else {
        console.log('not yet')
      }
    }
  }

  getAlarmTime = () => {
    const mapped = this.props.notificationReducer.notification
    const alarmArr = []

    for (let i = 0; i < mapped.length; i++) {
      alarmArr.push(`${mapped[i].notification_hour}:${mapped[i].notification_min}:00 ${mapped[i].am_pm}`)
    }

    this.setState({ alarmTime:alarmArr })
  }


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