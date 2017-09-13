import { connect } from 'react-redux'
import HeadLine from 'components/HeadLine'
import * as ACTION from 'actions/headLine'

const mapStateToProps = (state) => ({
  headLineList: state.headLineList
})

const mapDispatchToProps = (dispatch) => ({
  getHeadLineList: () => dispatch(ACTION.getHeadLine())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadLine)
