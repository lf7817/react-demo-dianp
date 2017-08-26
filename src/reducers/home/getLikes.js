import * as actionTypes from '../../constants/userInfo'

const getLikes = (state = {
  isLoading: false,
  hasMore: false,
  data: [],
  page: 0
}, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LIKES:
      return {
        ...state,
        page: action.page,
        isLoading: true
      }
    case actionTypes.RECEVIE_LIKES:
      return {
        isLoading: false,
        page: state.page + 1,
        hasMore: state.page >= 2 ? false : action.data.hasMore,
        data: [...state.data, ...action.data.data]
      }
    default:
      return state
  }
}

export default getLikes
