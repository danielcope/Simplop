import React, { Component } from 'react'
import Nav from './KidNav'
import AddKid from './AddKid'
import Question from '../Question'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateKid } from '../../redux/kidReducer'
import KidList from '../KidList'
import KidHeader from '../KidHeader'

class Kid extends Component {
  constructor () {
    super ();
    this.state = {
      user:''
    };
  }

  componentDidMount() {
    this.getKid()
  }

  getKid = async () => {
    await axios.get(`/api/kid`)
    .then(res =>
      this.props.updateKid(res.data)
  )};
  

  render () {
    

    return (
      <>
        <div  className='kid-view'>
          <div className='nav'>
            <KidHeader/>
            <Nav />
          </div>
          <KidList getKid={this.getKid}/> 
          <AddKid getKid={this.getKid}/>
        </div>
        <Question />
      </>

    )
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps,{updateKid}) (Kid)