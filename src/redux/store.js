import { createStore } from 'redux'
import parentReducer from './parentReducer'
import kidReducer from './kidReducer'
import eventReducer from './eventReducer'
import notificationReducer from './notificationReducer'
import { combineReducers } from 'redux'


const reducer = combineReducers({
  parentReducer,
  kidReducer,
  eventReducer,
  notificationReducer
})

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );