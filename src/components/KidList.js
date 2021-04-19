import React, { Component } from 'react'
import { connect } from 'react-redux';

class KidList extends Component {

  constructor() {
    super()
    this.state ={

    }
  }

  // const kidMapped = this.props.kidReducer.

  render(){

    console.log(this.props);

    const kidMapped = this.props.kidReducer.map((ele,i)=> {
      
    })

    return (

      

      <div></div>

    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (KidList)