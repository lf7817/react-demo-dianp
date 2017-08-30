import * as actionTypes from '../../constants/homeInfo'

const getAd = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_AD:
      return action.data.moduleData.data.list
    default:
      return state
  }
}

export default getAd
