const initialState = {
  event: []
}

const GET_EVENT = 'GET_EVENT'

export function updateEvent (event) {

  return {
    type:GET_EVENT,
    payload:event
  }
}

export default  function reducer (state = initialState,action) {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        event:action.payload
      }

      default: return state
  }
}