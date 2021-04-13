import React, { Component } from 'react';
import axios from 'axios';
import logo from './../../assets/helo_logo.png';
import { connect } from 'react-redux'
import { updateUser } from '../../redux/reducer'

import './Auth.css';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    }
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  
  handleChange(val) {
    this.setState({ username:val })
  }
  
  login() {
    axios.post('/auth/login', this.state)
      .then(res => {
        this.props.updateUser({username:this.state.username,password:this.state.password})
        // this.props.history.push('/kid')
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: 'Incorrect username or password!'})
      })
    }
    
    register() {
      axios.post('/auth/register', this.state)
        .then(res => {
          this.props.updateUser({username:this.state.username,password:this.state.password})
          // this.props.history.push('/kid')
        })
        .catch(err => {
          console.log(err)
          this.setState({errorMsg: 'Username taken!'})
        })
    }

  closeErrorMessage = () => {
    this.setState({
      errorMsg: false, 
      username: '', 
      password: ''
    })
  }

  render() {
    return (
      <div className='auth'>
        <div className='auth-container'>
          <div className='auth-input-box'>
            <p>Username:</p>
            <input value={this.state.username} onChange={e => this.handleChange(e.target.value)} />
          </div>
          <div className='auth-input-box'>
            <p>Password:</p>
            <input value={this.state.password} type='password' onChange={e => this.handleChange(e.target.value)} />
          </div>
          <div className='auth-button-container'>
            <button className='dark-button' onClick={this.login}> Login </button>
            <button className='dark-button' onClick={this.register}> Register </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect (null, {updateUser}) (Auth);