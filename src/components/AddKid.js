import React, { Component } from 'react'

class AddKid extends Component {
  constructor () {
    super();
    this.state = {
      name:''
    }
  }

  handleNameInput = (val) => {
    this.setState({ name:val })
    console.log(val);
  }

  // addKid = () => {
    
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