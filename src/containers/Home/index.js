import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from '../../components/HomeAd'
import * as actions from '../../actions/userinfo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount () {
    this.props.getHomeAd()
  }

  render() {
    return (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName} />
        <Category />
        {
          this.props.userInfo.adList ?
            <Ad list={this.props.userInfo.adList}/> :
            <div>加载中...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  getHomeAd: () => dispatch(actions.getHomeAd())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
