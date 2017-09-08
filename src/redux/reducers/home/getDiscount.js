import * as actionTypes from 'constants/homeInfo'

const getDiscount = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_DISCOUNT:
      return action.data.moduleData.data.preferenceValueHuiVos
    default:
      return state
  }
}

export default getDiscount
