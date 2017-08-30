import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import HomeBanner from '../../components/HomeBanner'
import HomeAd from '../../components/HomeAd'
import Loading from '../../components/Loading'
import HomeDiscount from '../../components/HomeDiscount'
import HomeReduce from '../../components/HomeReduce'

import * as ACTION from '../../actions/homeInfo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount () {
    const homeInfo = this.props.homeInfo
    if (homeInfo.rblist.length === 0) {
      this.props.getHomeInfo()
    }
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
          homeInfo.rblist.length > 0 ?
            <HomeBanner /> : null
        }
        {
          homeInfo.rblist.length > 0 ?
            <HomeAd list={homeInfo.rblist} className="home-rb"/> : null
        }
        {
          homeInfo.adlist.length > 0 ?
            <HomeAd list={homeInfo.adlist} className="home-advertisement"/> : null
        }
        {
          homeInfo.discountlist.length > 0 ?
            <HomeDiscount list={homeInfo.discountlist} /> : null
        }
        {
          homeInfo.discountlist.length > 0 ?
            <HomeReduce list={homeInfo.reducelist} /> : null
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
