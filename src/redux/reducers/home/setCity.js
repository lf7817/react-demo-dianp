import * as actionTypes from 'constants/homeInfo'

const setCity = (state = '北京', action) => {
  switch (action.type) {
    case actionTypes.USER_SET_CITY:
      return action.cityName
    default:
      return state
  }
}

export default setCity