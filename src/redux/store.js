import { createStore,combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import parentReducer from './parentReducer'

const rootReducer = combineReducers({
  parentReducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));