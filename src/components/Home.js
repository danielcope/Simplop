// import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header'
import Auth from './Auth'


class Home extends Component {
  constructor (){
    super();
    this.state = {

    }
  }
  
  render(){

    console.log(this.props);
    const { history } = this.props

    return (
      <div>
        <div className = "header-all">
          <Header />
          <span className = "login">Login &equiv;</span>
        </div>
        <h3>Welcome to Simplop</h3>
        <section>
          <Auth history={history} />
        </section>
      </div>
      
    )
  }
}

export default Home