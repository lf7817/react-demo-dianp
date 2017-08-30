import * as actionTypes from '../../constants/homeInfo'

const getActivity = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ACTIVITY:
      return action.data.moduleData.data.list
    default:
      return state
  }
}

export default getActivity
