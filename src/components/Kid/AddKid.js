import axios from 'axios';
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

  addKid = () => {
    axios.post('/api/kid', {kidName:this.state.name})
    .then(()=> {
      this.setState({name:''})
      this.props.getKid();
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className='add-kid'>
        <input className='add-kid-input' onChange={e => this.handleNameInput(e.target.value)} placeholder="add kid's name"/>
        <button className='add-kid-button' onClick={this.addKid}>Add</button>
      </div>

    )
  }
}

export default AddKid