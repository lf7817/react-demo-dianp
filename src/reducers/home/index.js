import { combineReducers } from 'redux'
import isLoading from './isLoading'
import setCity from './setCity'
import getActivity from './getActivity'



const homeInfo = combineReducers({
  isLoading,
  cityName: setCity,
  activity: getActivity
})

export default homeInfo
