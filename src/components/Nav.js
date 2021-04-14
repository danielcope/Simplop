import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'

class Nav extends Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render () {

    console.log(this.state)

    return (
        <div>
          <Link to='/' >Logout</Link>
        </div>

    )
  }
}
export default Nav