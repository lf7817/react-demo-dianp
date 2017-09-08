import * as actionTyps from '../../constants/homeInfo'
import axios from 'axios'
import HOST from '../../constants/host'

export const setCity = (cityName) => ({
  type: actionTyps.USER_SET_CITY,
  cityName
})

const requestHomeInfo = () => ({
  type: actionTyps.REQUEST_HOME_INFO,
})

const receiveHomeInfo = () => ({
  type: actionTyps.RECEIVE_HOME_INFO
})

const requestHomeInfoFailure = () => ({
  type: actionTyps.REQUEST_HOME_INFO_FAILURE
})

const getHeadLine = (data) => ({
  type: actionTyps.GET_HEADLINE,
  data
})

const getAd = (data) => ({
  type: actionTyps.GET_AD,
  data
})

const getRb = (data) => ({
  type: actionTyps.GET_RB,
  data
})

const getDiscount = (data) => ({
  type: actionTyps.GET_DISCOUNT,
  data
})

const getReduce = (data) => ({
  type: actionTyps.GET_REDUCE,
  data
})

const requestLikes = (page) => ({
  type: actionTyps.REQUEST_LIKES,
  page
})

const receiveLikes = (data) => ({
  type: actionTyps.RECEIVE_LIKES,
  data
})



export const getNewLikeList = (page) => {
  return async dispatch => {
    dispatch(requestLikes(page))
    try {
      const res = await axios(`${HOST}/assets/json/likes${page}.json`)
      const modules = analyse(res.data.data.moduleInfoList)
      setTimeout(() => dispatch(receiveLikes(modules['cnxh'])), 200);
    } catch (e) {

    }
  }
}

const getLikes = (data) => ({
  type: actionTyps.GET_LIKES,
  data
})

export const hideLikesHover = () => ({
  type: actionTyps.HIDE_LIKES_HOVER
})

export const getHomeInfo = () => {
  return async dispatch => {
    dispatch(requestHomeInfo())
    try {
      const res = await axios(`${HOST}/assets/json/homeInfo.json`)
      setTimeout(() => {
        if (res.data.code === 200) {
          const modules = analyse(res.data.data.moduleInfoList)
          dispatch(receiveHomeInfo())
          dispatch(getHeadLine(modules['headline']))
          dispatch(getAd(modules['xyhzq']))
          dispatch(getRb(modules['rb']))
          dispatch(getDiscount(modules['czth']))
          dispatch(getReduce(modules['ttlj']))
          dispatch(getLikes(modules['cnxh']))          
        } else {
          dispatch(requestHomeInfoFailure())
        }
      }, 2000)
    } catch (e) {
      dispatch(requestHomeInfoFailure())
    }
  }
}

const analyse = (moduleInfoList) => {
  return moduleInfoList.reduce((obj, module) => {
    return {
      ...obj,
      [module.moduleName]: module
    }
  }, {})
}