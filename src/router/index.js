import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import localStore from '../utils/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as homeInfoActionFromOtherFile from '../actions/homeInfo'

import Home from '../containers/Home'
import City from '../containers/City'

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
      cityName = '北京'
    }
    this.props.homeInfoActions.setCity(cityName)
    this.setState({
      initDone: true
    })
  }

  render () {
    const routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/city" exact component={City} />
      </Switch>
    )
    
    return (
      <Router>
        {
          this.state.initDone ? routes : <div>加载中...</div>
        }
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
