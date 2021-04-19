import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';

class KidList extends Component {

  constructor() {
    super()
    this.state ={

    }
  }
  
  deleteKid = (kid_id) => {
    axios.delete(`/api/kid/${kid_id}`)
    .then(() => {
      this.props.getKid();
    })
  }
  
  render(){
    
    console.log(this.props)
    
    const kidMapped = this.props.kidReducer.kid.map((ele,i) => (
    <div key={ele.kid_id}className='kid'>
      <span className='kid-name'>{ele.name}</span>

      <label>Time:</label>
      <select>
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

      <select>
        <option>00</option>
        <option>15</option>
        <option>30</option>
        <option>45</option>
      </select>

      <select>
        <option>AM</option>
        <option>PM</option>
      </select>
      <select> 
        <option>Liquid</option>
        <option>Solid</option>
      </select>  

      <div class="icon-trash" onClick={() => this.deleteKid(ele.kid_id)}>
        <div class="trash-lid"></div>
        <div class="trash-container"></div>
        <div class="trash-line-1"></div>
        <div class="trash-line-2"></div>
        <div class="trash-line-3"></div>
      </div>
    
    </div>
    ))

    return (

      <div>
        { kidMapped }
      </div>

    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (KidList)