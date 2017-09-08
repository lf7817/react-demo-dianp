import * as actionTypes from 'constants/homeInfo'

const getReduce = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_REDUCE:
      return action.data.moduleData.data.dayHuiVos
    default:
      return state
  }
}

export default getReduce
