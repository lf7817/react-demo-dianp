import * as actionTypes from 'constants/homeInfo'

const getLikes = (state = {
  isShowLikesHover: true,
  isLoading: false,
  hasMore: true,
  data:[],
  page: 0
}, action) => {
  const param = action.data ? action.data.moduleData.data : null
  switch (action.type) {
    case actionTypes.GET_LIKES:      
      return  {
        ...state,
        data: param.guessYouVoList,
        page: param.startNum
      }
    case actionTypes.REQUEST_LIKES:
      return {
        ...state,
        isLoading: true        
      }
    case actionTypes.RECEIVE_LIKES:
      return {
        ...state,
        isLoading: false,
        page: param.startNum,
        hasMore: state.page >= 3 ? false : true,
        data: [...state.data, ...param.guessYouVoList]
      }
    case actionTypes.HIDE_LIKES_HOVER:
      return {
        ...state,
        isShowLikesHover: false
      }
    default:
      return state
  }
}

export default getLikes
