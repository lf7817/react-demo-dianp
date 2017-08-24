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