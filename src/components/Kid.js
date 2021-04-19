import React, { Component } from 'react'
import Nav from './Nav'
import AddKid from './AddKid'
import Header from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateKid } from '../redux/kidReducer'
import KidList from './KidList'


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

  getKid = () => {
    axios.get(`/api/kid`)
    .then(res =>
      this.props.updateKid(res.data)
      )};
  

  render () {
    

    return (
      <div>
        <Header />
        <div className='nav'>
          <Nav />
        </div>
        <KidList getKid={this.getKid}/> 
        <AddKid getKid={this.getKid}/>
      </div>

    )
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps,{updateKid}) (Kid)