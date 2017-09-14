import { connect } from 'react-redux'
import Home from 'components/Home'
import * as ACTION from '../../redux/actions/homeInfo'
import * as ACTIONROUTER from 'actions/routerAnimate'

const mapStateToProps = (state) => ({
  homeInfo: state.homeInfo
})

const mapDispatchToProps = (dispatch) => ({
  getHomeInfo: () => dispatch(ACTION.getHomeInfo()),
  getLikes: (page) => dispatch(ACTION.getNewLikeList(page)),
  hideLikesHover: () => dispatch(ACTION.hideLikesHover()),
  setRouterAnimate: (cls) => dispatch(ACTIONROUTER.routerAnimate(cls))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
