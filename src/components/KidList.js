import React, { Component } from 'react'
import { connect } from 'react-redux';

class KidList extends Component {

  constructor() {
    super()
    this.state ={

    }
  }

  render(){

    console.log(this.props);

    const kidMapped = this.props.kidReducer.kid.map((ele,i) => 
    <div key={ele.kid_id}>
      <span>{ele.name}</span>
      <button>Liquid</button>
      <button>Solid</button>
    </div>
    )

    return (

      <div>
        {kidMapped}
      </div>

    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (KidList)