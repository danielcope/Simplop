import React, { Component } from 'react'
import { connect } from 'react-redux'


class TrendsList extends Component {
  constructor (){
    super();
    this.state = {
}
}

  render(){

    console.log(this.props)

    const eventMapped = this.props.eventReducer.event.map((ele,i) => (
      <div key={ele.event_id} className='event'>
        
        <section className='date-event'>
          {ele.month}/{ele.day}
        </section>

        <section className='time-event'>
          {ele.hour}:{ele.min} {ele.am_pm}
        </section>

        <section className='type-event'>
          {ele.type}
        </section>

      </div>
    ))
    
    return (
      <div className='event-list'>
        { this.props.eventReducer.event[0]
          ?
        <h1 className='event-kid-name'>{this.props.eventReducer.event[0].name}</h1> :
        <h2>Please add events on the Home page</h2>
        }
          
        { eventMapped }
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect (mapStateToProps) (TrendsList)