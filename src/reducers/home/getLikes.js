import * as actionTypes from '../../constants/userInfo'

const getLikes = (state = {
  isFetching: false,
  hasMore: false,
  data: []
}, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LIKES:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.RECEVIE_LIKES:
      return {
        isFetching: false,
        hasMore: action.data.hasMore,
        data: [...state.data, ...action.data.data]
      }
    default:
      return state
  }
}

export default getLikes
