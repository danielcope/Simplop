import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header'
import Auth from './Auth'


class Home extends Component {
  constructor (){
    super();
    
  }
  
  render(){
    return (
      <div>
        <div className = "header-all">
          <Header />
          <span className = "login">Login &equiv;</span>
        </div>
        <h3>Welcome to Simplop</h3>
        <section>
          <Auth/>
        </section>
      </div>
      
    )
  }
}

export default Home