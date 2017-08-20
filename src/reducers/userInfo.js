import * as actionTypes from '../constants/userInfo'

const initialState = {}
const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data
    default:
      return state
  }
}

export default userInfo