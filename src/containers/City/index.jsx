import { connect } from 'react-redux'
import City from '../../components/City'
import * as ACTION from '../../redux/actions/homeInfo'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  setCity: (name) => dispatch(ACTION.setCity(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
