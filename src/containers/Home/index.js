import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Activity from '../../components/Activity'
import Loading from '../../components/Loading'

import * as ACTION from '../../actions/homeInfo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount () {
    this.props.getHomeInfo()
  }

  render() {
    const homeInfo = this.props.homeInfo
    return (
      <div>
        <HomeHeader cityName={homeInfo.cityName} />
        <Category />
        {
          homeInfo.isLoading === true ?
            <Loading /> : null
        }
        {
          homeInfo.activity.length > 0 ?
            <Activity /> : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  homeInfo: state.homeInfo
})

const mapDispatchToProps = (dispatch) => ({
  getHomeInfo: () => dispatch(ACTION.getHomeInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
