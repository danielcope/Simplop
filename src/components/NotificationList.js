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


  componentDidMount = () => {
    this.getNotification()
  }

  getNotification = () => {
    axios.get(`/api/notification/${this.props.kidReducer.kid[0].parent_id}`)
    .then(res => {
      this.props.updateNotification(res.data
        )}
    
  )}

  render(){

    console.log(this.props)

    // const mappedNotification = this.props.notificationReducer.notification.map((ele,i)=>{
    //   <div key={ele.notification_id}>
    //     {ele.notification_id}
    //   </div>
    // })


    return (
      <div>
        {/* {mappedNotification} */}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect (mapStateToProps, {updateNotification})(NotificationList)