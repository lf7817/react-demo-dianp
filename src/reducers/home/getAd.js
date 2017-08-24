import * as actionTypes from '../../constants/userInfo'

const getAd = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REQUEST_AD:
      return state
    case actionTypes.RECEIVE_AD:
      return action.list
    default:
      return state
  }
}

export default getAd
