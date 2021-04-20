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
        <h1>{ele.name}</h1>
        <div>
          
        </div>
      </div>
    ))

    return (
      <div>
        { eventMapped }
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect (mapStateToProps) (TrendsList)