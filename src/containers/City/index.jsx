import { connect } from 'react-redux'
import City from 'components/City'
import * as ACTION from 'actions/homeInfo'
import * as ACTIONROUTER from 'actions/routerAnimate'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  setRouterAnimate: (cls) => dispatch(ACTIONROUTER.routerAnimate(cls)),
  setCity: (name) => dispatch(ACTION.setCity(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
