import React, {useEffect} from 'react'
import { connect } from 'react-redux'


const KidHeader = (props) => {

  useEffect(() => {
    alert(`Welcome, ${props.parentReducer.user.username}!`)
  })

  return (
    <h1></h1>

)
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (KidHeader)