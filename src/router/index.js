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
import ScrollToTop from 'components/ScrollToTop'

import './style.css'

const AsyncHome = asyncComponent(() => import('@/containers/Home'))
const AsyncCity = asyncComponent(() => import('@/containers/City'))
const AsyncHeadLine = asyncComponent(() => import('@/containers/HeadLine'))

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
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/city" component={AsyncCity} />
            <Route path="/headLine" component={AsyncHeadLine} />
          </Switch>
        </ScrollToTop>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  homeInfoActions: bindActionCreators(homeInfoActionFromOtherFile, dispatch)
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterMap)

export default App
