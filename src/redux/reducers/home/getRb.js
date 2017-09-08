import * as actionTypes from 'constants/homeInfo'

const getRb = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_RB:
      return action.data.moduleData.data.list
    default:
      return state
  }
}

export default getRb
