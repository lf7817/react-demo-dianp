import { combineReducers } from 'redux'
import setCity from './setCity'
import getAd from './getAd'
import getLikes from './getLikes'

const userInfo = combineReducers({
  cityName: setCity,
  adList: getAd,
  likes: getLikes
})

export default userInfo
