import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import localStore from '@/utils/localStore'
import { CITYNAME } from 'constants/localStoreKey'
import * as homeInfoActionFromOtherFile from 'actions/homeInfo'
import asyncComponent from 'components/AsyncComponent'
// import RouterAnimate from 'components/RouterAnimate'
import ScrollToTop from 'components/ScrollToTop'
import './style.css'

const AsyncHome = asyncComponent(() => import('@/containers/Home'))
const AsyncCity = asyncComponent(() => import('@/containers/City'))
const AsyncHeadLine = asyncComponent(() => import('@/containers/HeadLine'))
const AsyncLikeDetail = asyncComponent(() => import('components/LikeDetail'))

class RouterMap extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }

  componentDidMount () {
    let cityName = localStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '上海'
    }
    this.props.homeInfoActions.setCity(cityName)
    this.setState({
      initDone: true
    })
  }

  render () {
    // const animateCls = this.props.routerAnimate
    return (
      <Router>
        {/*<RouterAnimate animateCls={animateCls}>*/}
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={AsyncHome} />
              <Route path="/city" component={AsyncCity} />
              <Route path="/headLine" component={AsyncHeadLine} />
              <Route path="/likedetail/:groupId" component={AsyncLikeDetail} />
            </Switch>
          </ScrollToTop>
        {/*</RouterAnimate>*/}
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  routerAnimate: state.routerAnimate
})

const mapDispatchToProps = (dispatch) => ({
  homeInfoActions: bindActionCreators(homeInfoActionFromOtherFile, dispatch)
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterMap)

export default App
