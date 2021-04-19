import React, { Component } from 'react'
import Auth from './Auth'


class Home extends Component {
  constructor (){
    super();
    this.state = {
      username:''
    }
  }

  
  
  render(){



    const { history } = this.props


    return (
      <div>
        <div className = "header-all">
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