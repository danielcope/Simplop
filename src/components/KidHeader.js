import React from 'react'
import { connect } from 'react-redux'


const KidHeader = (props) => {

  return (
    <h1 className='kid-header'>Kids</h1>
)
}

const mapStateToProps = state => state

export default connect(mapStateToProps) (KidHeader)