import * as actionTyps from '../constants/userInfo'
import axios from 'axios'

let host = ''
if (process.env.NODE_ENV === 'development') {
  host = 'https://lf7817.github.io/react-demo-dianp/public'
}

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
      // const res = await axios('/api/homead')
      const res = await axios(`${host}/assets/json/ad.json`)
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
     // const res = await axios(`/api/homelist/${cityName}/${page}`)
     const res = await axios(`${host}/assets/json/likes.json`)
     dispatch(receiveLikes(cityName, res.data))
    } catch (e) {

    }
  }
}