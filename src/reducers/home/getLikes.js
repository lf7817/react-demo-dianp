import * as actionTypes from '../../constants/userInfo'

const getLikes = (state = {
  hasMore: false,
  data: []
}, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LIKES:
      return state
    case actionTypes.RECEVIE_LIKES:
      return {
        hasMore: action.data.hasMore,
        data: [...state.data, ...action.data.data]
      }
    default:
      return state
  }
}

export default getLikes
