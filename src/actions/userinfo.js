import * as actionTyps from '../constants/userInfo'
import axios from 'axios'

export const setCity = (cityName) => ({
  type: actionTyps.USER_SET_CITY,
  cityName
})

const requstAD = () => ({
  type: actionTyps.REQUEST_AD
})

const receiveAD = (list) => ({
  type: actionTyps.RECEIVE_AD,
  list
})

export const getHomeAd = () => {
  return async dispatch => {
    dispatch(requstAD())
    try {
      const res = await axios('/api/homead')
      dispatch(receiveAD(res.data))
    } catch (e) {

    }
  }
}

const requestLikes = (cityName, page) => ({
  type: actionTyps.REQUEST_LIKES,
  cityName,
  page
})

const receiveLikes = (cityName, data) => ({
  type: actionTyps.RECEVIE_LIKES,
  cityName,
  data
})

export const getLikes = (cityName, page) => {
  return async dispatch => {
    dispatch(requestLikes(cityName, page))
    try {
     const res = await axios(`/api/homelist/${cityName}/${page}`)
     dispatch(receiveLikes(cityName, res.data))
    } catch (e) {

    }
  }
}