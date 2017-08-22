import * as actionTyps from '../constants/userInfo'

export const update = (data) => ({
  type: actionTyps.USERINFO_UPDATE,
  data
})