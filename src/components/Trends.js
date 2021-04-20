import axios from 'axios';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateEvent} from '../redux/eventReducer'
import TrendsList from './TrendsList'
import TrendsNav from './TrendsNav'


class  Trends extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  componentDidMount = () => {
    this.getEvent()
  }

  getEvent = async () => {
    const { id } = this.props.match.params
    
    await axios.get(`/api/event/${id}`)
      .then(res => 
        this.props.updateEvent(res.data)
        )}

  render() {

    return (


      <div>
        <TrendsNav />
        <TrendsList getEvent={this.getEvent} />        
      </div>

)
}
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {updateEvent})(Trends)