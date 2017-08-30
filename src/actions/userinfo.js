import * as actionTyps from '../constants/userInfo'
import axios from 'axios'
import HOST from '../constants/host'

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
      const res = await axios(`${HOST}/assets/json/ad.json`)
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
    new Promise((resolve, reject) => {
      setTimeout(() => {
        axios(`${HOST}/assets/json/likes.json`)
          .then(res => resolve(res))
      }, page === 0 ? 4000 : 100)
    }).then(res => dispatch(receiveLikes(cityName, res.data)))
  }
}