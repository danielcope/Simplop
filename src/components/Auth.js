import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from '../redux/parentReducer'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: ''
    }
   
  }
  
  handleUsernameChange (val) {
    this.setState({ username:val })
  }
  
  handlePasswordChange (val) {
    this.setState({ password:val })
  }
  
  login = async () => {

    const { username,password } = this.state

    await axios.post('/auth/login', {username:username,password:password})
      .then(res => {
        this.props.updateUser({username:username})
        this.props.history.push('/kid')
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: 'Incorrect username or password!'})
      })
    }
    
    register = () => {
      
      const { username,password } = this.state
      
      axios.post('/auth/register', {username:username,password:password})
      .then(res => {
        this.props.updateUser({username:username,password:password})
        this.props.history.push('/kid')
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
          <div>
            <input className='auth-input-box' value={this.state.username} placeholder="username" onChange={e => this.handleUsernameChange(e.target.value)} />
          </div>
          <div >
            <input className='auth-input-box' value={this.state.password} type='password' placeholder="password" onChange={e => this.handlePasswordChange(e.target.value)} />
          </div>
          <div className='auth-button-container'>
            <button className='login-button' onClick={this.login}> Login </button>
            <button className='register-button' onClick={this.register}> Register </button>
          </div>
        </div>
          {this.state.errorMsg && <h3 className='auth-error-msg'>{this.state.errorMsg} <span className='close-err' onClick={this.closeErrorMessage}>X</span></h3>}
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect (mapStateToProps, {updateUser}) (Auth);