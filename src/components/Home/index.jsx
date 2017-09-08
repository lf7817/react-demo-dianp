import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeHeader from './HomeHeader'
import Category from './Category'
import HomeBanner from './HomeBanner'
import HomeAd from './HomeAd'
import HomeHeadLine from './HomeHeadLine'
import HomeDiscount from './HomeDiscount'
import HomeReduce from './HomeReduce'
import Likes from './Likes'

import Loading from '../Loading'
import LoadMore from '../LoadMore'

class Home extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.loadMoreHandle = this.loadMoreHandle.bind(this)
  }

  componentDidMount () {
    const homeInfo = this.props.homeInfo
    if (homeInfo.rblist.length === 0) {
      this.props.getHomeInfo()
    }
  }

  loadMoreHandle () {
    const likelist = this.props.homeInfo.likelist
    this.props.getLikes(likelist.page)
  }
  render() {
    const homeInfo = this.props.homeInfo
    return (
      <div>
        <HomeHeader cityName={homeInfo.cityName} />
        <Category />
        {
          homeInfo.isLoading === true ?
            <Loading /> :
            homeInfo.likelist.data.length > 0 ? (
              <div>
                <HomeHeadLine list={homeInfo.headline}/>
                <HomeBanner />
                <HomeAd list={homeInfo.rblist} className="home-rb"/>
                <HomeAd list={homeInfo.adlist} className="home-advertisement"/>
                <HomeDiscount list={homeInfo.discountlist} />
                <HomeReduce list={homeInfo.reducelist} />
                <Likes list={homeInfo.likelist.data} isShowLikesHover={homeInfo.likelist.isShowLikesHover} hideLikesHover={this.props.hideLikesHover} />
                <LoadMore hasMore={homeInfo.likelist.hasMore}
                          isLoading={homeInfo.likelist.isLoading}
                          loadMoreHandle={this.loadMoreHandle}/>
              </div>
            ) : null
        }
      </div>
    )
  }
}

export default Home
