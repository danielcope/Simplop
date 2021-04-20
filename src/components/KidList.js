import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class KidList extends Component {

  constructor() {
    super()
    this.state ={
      editName: false,
      newName: '',
      hour: 12,
      min: 0,
      AmPm: 'PM',
      type: 'liquid'

    }
  }
  
  deleteKid = (kid_id) => {
    axios.delete(`/api/kid/${kid_id}`)
    .then(() => {
      this.props.getKid();
    })
  }

  handleNameEdit = () => {
    this.setState ({ editName: !this.state.editName })
  }

  handleNewName = (val) => {
    this.setState({ newName: val })
  }
  
  editKid = (kid_id) => {
    axios.put( `/api/kid/${kid_id}`, {newName:this.state.newName})
    .then(() => {
      console.log(this.state.newName)
      this.setState({ 
        editName: false,
        newName: ''
      })

      this.props.getKid()
    })
  }

  cancelEdit = () => {
    this.setState({
      editName:false,
      newName:''
    })
  }

  handleHourInput = (val) => {
    this.setState({ hour:val })
    console.log(val)
  }

  handleMinInput = (val) => {
    this.setState({ min:val })
    console.log(val)
  }

  handleAmPmInput = (val) => {
    this.setState({ AmPm:val })
  }

  handleTypeInput = (val) => {
    this.setState({ type: val })
  }

  addEvent = () => {
    
  }


  render(){
        
    const kidMapped = this.props.kidReducer.kid.map((ele,i) => (
    <div key={ele.kid_id}className='kid'>
      <div className='name-pencil'>
        <div class="pencil" onClick={this.handleNameEdit}>&#9998;</div>

      {
      this.state.editName ? 
        <div>
          <input placeholder={ele.name} onChange={(e) => this.handleNewName(e.target.value) }/>
          <button onClick={() => this.editKid(ele.kid_id)}>Submit</button>
          <button onClick={this.cancelEdit}>X</button>
        </div>
        : 
        <span className='kid-name'>{ele.name}</span>
      }
             
      </div>
      <section className='time-row'>
        <label className='time-label'>Time:</label>
        <select className='event-dropdown' onChange={(e) => this.handleHourInput(e.target.value)}>
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

        <select className='event-dropdown' onChange={(e) => this.handleMinInput(e.target.value)}>
          <option>00</option>
          <option>15</option>
          <option>30</option>
          <option>45</option>
        </select>

        <select className='event-dropdown' onChange={(e)=> this.handleAmPmInput(e.target.value)}>
          <option>AM</option>
          <option>PM</option>
        </select>
        <select className='event-dropdown' onChange={(e) => this.handleTypeInput(e.target.value)}> 
          <option>Liquid</option>
          <option>Solid</option>
        </select>  

        <button className='event-submit'>Submit</button>

      </section>
      

      <section>

        

        <div className="icon-trash" onClick={() => this.deleteKid(ele.kid_id)}>
          <div className="trash-lid"></div>
          <div className="trash-container"></div>
          <div className="trash-line-1"></div>
          <div className="trash-line-2"></div>
          <div className="trash-line-3"></div>
        </div>
      </section>
    
    </div>
    ))

    return (

      <section>
        { kidMapped }
      </section>

    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (KidList)