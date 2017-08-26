import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from '../../components/HomeAd'
import Likes from '../../components/Likes'
import LoadMore from '../../components/LoadMore'

import * as actions from '../../actions/userinfo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.loadMoreLikes = this.loadMoreLikes.bind(this)
  }

  componentDidMount () {
    this.props.getHomeAd()
    this.props.getLikes(this.props.userInfo.cityName, 0)
  }

  loadMoreLikes () {
    this.props.getLikes(this.props.userInfo.cityName, this.props.userInfo.likes.page)
  }

  render() {
    const userInfo = this.props.userInfo
    const likes = userInfo.likes
    return (
      <div>
        <HomeHeader cityName={userInfo.cityName} />
        <Category />
        {
          userInfo.adList ?
            <Ad list={userInfo.adList}/> :
            <div>加载中...</div>
        }
        {
          userInfo.likes.data.length > 0 ?
            <Likes {...userInfo.likes} /> :
            <div>加载中...</div>
        }
        <LoadMore isLoading={likes.isLoading} hasMore={likes.hasMore} loadMoreHandle={this.loadMoreLikes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
  getHomeAd: () => dispatch(actions.getHomeAd()),
  getLikes: (cityName, page) => dispatch(actions.getLikes(cityName, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
