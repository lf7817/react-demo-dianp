import * as actionTyps from 'constants/headLine'
import axios from 'axios'
import HOST from 'constants/host'

const requestHeadLine = () => ({
  type: actionTyps.REQUEST_HEAD_LINE
})

const receiveHeadLine = (list) => ({
  type: actionTyps.RECEIVE_HEAD_LINE,
  list
})

export const getHeadLine = () => (
  async dispatch => {
    dispatch(requestHeadLine())
    try {
      const res = await axios(`${HOST}/assets/json/headline.json`)
      const list = res.data.headlines
      dispatch(receiveHeadLine(list))
    } catch (e) {
      console.log(e)
    }
  }
)

