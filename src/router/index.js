import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import localStore from '../utils/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionFromOtherFile from '../actions/userinfo'

import Home from '../containers/Home'

class RouterMap extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: true
    }
  }

  componentDidMount () {
    let cityName = localStore.getItem(CITYNAME)
    if (cityName == null) {
      cityName = '北京'
    }
    this.props.userInfoActions.update({
      cityName
    })
  }

  render () {
    const routes = (
      <Switch>
        <Route path="/" exact component={Home} />
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
  userInfoActions: bindActionCreators(userInfoActionFromOtherFile, dispatch)
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterMap)

export default App
