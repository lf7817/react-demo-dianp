import * as actionTypes from 'constants/headLine'

const headLineList = (state = [], action) => {
  switch (action.type) {
    case actionTypes.REQUEST_HEAD_LINE:
      return state
    case actionTypes.RECEIVE_HEAD_LINE:
      return action.list
    default:
      return state
  }
}

export default headLineList
