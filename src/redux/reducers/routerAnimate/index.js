import * as ACTION from '@/constants/routerAnimate'

const setRouterAnimate = (state = 'left', action) => {
  switch (action.type) {
    case ACTION.ROUTER_ANIMATE:
      return action.cls
    default:
      return state
  }
}

export default setRouterAnimate
