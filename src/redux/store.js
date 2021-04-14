import { createStore } from 'redux'
import parentReducer from './parentReducer'

const reducer = parentReducer

export default createStore(reducer);