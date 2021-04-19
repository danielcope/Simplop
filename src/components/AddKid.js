import React, { Component } from 'react'
// import axios from 'axios';

class AddKid extends Component {
  constructor () {
    super();
    this.state = {
      name:''
    }
  }

  handleNameInput = (val) => {
    this.setState({ name:val })
  }

  // addKid = () => {
  //   axios.post( '/api/kid', {kid_name:this.state.name} )    
  // }

  render () {
    return (
      <div>
        <input onChange={e => this.handleNameInput(e.target.value)} placeholder="add kid's name"/>
        <button>Add</button>
      </div>

    )
  }
}

export default AddKid