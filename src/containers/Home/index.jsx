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
import Likes from '../../components/Likes'
import LoadMore from '../../components/LoadMore'
import HeadLine from '../../components/HeadLine'

import * as ACTION from '../../actions/homeInfo'

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
                <HeadLine list={homeInfo.headline}/>
                <HomeBanner />
                <HomeAd list={homeInfo.rblist} className="home-rb"/>
                <HomeAd list={homeInfo.adlist} className="home-advertisement"/>
                <HomeDiscount list={homeInfo.discountlist} />
                <HomeReduce list={homeInfo.reducelist} />
                <Likes list={homeInfo.likelist.data}/>
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

const mapStateToProps = (state) => ({
  homeInfo: state.homeInfo
})

const mapDispatchToProps = (dispatch) => ({
  getHomeInfo: () => dispatch(ACTION.getHomeInfo()),
  getLikes: (page) => dispatch(ACTION.getNewLikeList(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
