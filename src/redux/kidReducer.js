const initialState = {
  kid: '',
}

const GET_KID = 'GET_KID'

export function updateKid (kid) {

  return {
    type: GET_KID,
    payload:kid
  }
}

export default function reducer (state = initialState,action) {
  switch (action.type) {
    case GET_KID:
      return {
        ...state,
        kid:action.payload
      }

      default: return state
  } 
}