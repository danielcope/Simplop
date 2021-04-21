const initialState = {
  notification: []
}

const GET_NOTIFICATION = 'GET_NOTIFICATION'

export function updateNotification (notification) {

  return {
    type:GET_NOTIFICATION,
    payload:notification
  }
}

export default function reducer (state = initialState,action) {
  switch (action.type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        notification:action.payload
      }
  
    default: return state
    }
}