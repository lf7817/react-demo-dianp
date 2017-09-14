import { combineReducers } from 'redux'
import homeInfo from './home'
import headLineList from './headLine'
import routerAnimate from './routerAnimate'

export default combineReducers({
  homeInfo,
  headLineList,
  routerAnimate
})
