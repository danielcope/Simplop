import React, { Component } from 'react'
import Auth from './Auth'


class Home extends Component {
  constructor (){
    super();
    this.state = {
      menu: false
    }
  }

  
  clickHandler = () => {
    this.setState({ menu: !this.state.menu })
    console.log(this.state.menu)
  }

  
  render(){
    const { history } = this.props

    return (
      <div className='home'>
          <span className = "login" onClick={this.clickHandler}>Login &equiv;</span>
        <section className={ this.state.menu ? 'auth-opened' : 'auth-closed' }>
          <Auth history={history} />
        </section>
        <h3 className='welcome' >Welcome to Simplop</h3>
      </div>
      
    )
  }
}

export default Home