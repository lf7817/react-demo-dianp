import * as actionTypes from 'constants/homeInfo'

const isLoading = (isLoading = false, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_HOME_INFO:
      return isLoading = true
    case actionTypes.RECEIVE_HOME_INFO:
      return isLoading = false
    default:
      return isLoading
  }
}

export default isLoading
