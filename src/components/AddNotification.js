import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

class AddNotification extends Component {
  constructor (){
    super();
    this.state = {
      notification_hour: 1,
      notification_min: 0,
      am_pm: 'AM'
}
}

  addNotification = () => {
    const { notification_hour,notification_min,am_pm } = this.state
    const {parent_id} = this.props.kidReducer.kid[0]

    axios.post('/api/notification', {parent_id:parent_id,notification_hour:notification_hour,notification_min:notification_min,am_pm:am_pm})
    .then(res=>this.props.getNotification())
  }

  handleNotificationHour = (val) => {
    this.setState({ notification_hour:val })
    console.log(val)
  }
  
  handleNotificationMin = (val) => {
    this.setState({ notification_min:val })
    console.log(val)
  }
  
  handleNotificationAmPm = (val) => {
    this.setState({ am_pm: val })
    console.log(val)
  }

  render(){

    
    return (
      <div className='add-notification-container'>
          <label className='add-title'>Add Notification</label>
        <section className='notification-time-row'>
          <span>Time:</span>
          <select onChange={e => this.handleNotificationHour(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>

          <select onChange={e => this.handleNotificationMin(e.target.value)}>
            <option>00</option>
            <option>15</option>
            <option>30</option>
            <option>45</option>
          </select>

          <select onChange={e => this.handleNotificationAmPm(e.target.value)}>
            <option>AM</option>
            <option>PM</option>
          </select>

        </section>

          <button className='notification-submit' onClick={this.addNotification}>Submit</button>
      
      </div>
    )
  }
}

const mapStateToProps=state=>state

export default connect(mapStateToProps) (AddNotification)