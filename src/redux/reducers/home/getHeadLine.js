import * as actionTypes from '../../../constants/homeInfo'

const getDiscount = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_HEADLINE:
      return action.data.moduleData.data.list
    default:
      return state
  }
}

export default getDiscount
