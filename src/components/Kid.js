import React, { Component } from 'react'
import Nav from './Nav'
import AddKid from './AddKid'
import Header from './Header'
import axios from 'axios'
import {connect} from 'react-redux'
import updateKid from '../redux/kidReducer'

class Kid extends Component {
  constructor () {
    super ();
    this.state = {
      user:''
    };
  }

  // componentDidMount() {
  //   this.getKid()
  // }

  getKid = () => {
    axios.get(`/api/kid/${this.props.parentReducer.user.username}`)
    .then(res =>
      this.props.updateKid({res})

      )};
  

  render () {
    
    console.log(this.props)

    return (
      <div>
        <Header />
        <Nav />
        <AddKid />

      </div>

    )
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps,{updateKid}) (Kid)