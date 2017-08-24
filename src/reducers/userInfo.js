import * as actionTypes from '../constants/userInfo'

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SET_CITY:
      return {
        ...state,
        cityName: action.cityName
      }
    case actionTypes.REQUEST_AD:
      return state
    case actionTypes.RECEIVE_AD:
      return {
        ...state,
        adList: action.list
      }
    default:
      return state
  }
}



export default userInfo