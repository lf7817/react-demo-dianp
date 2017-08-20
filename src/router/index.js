import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Home from '../components/Home'

class App extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      initialDone: false
    }
  }

  componentDidMount () {
    let cityName = ''

    if (cityName == null) {
      cityName = '北京'
    }
    setTimeout(() => this.setState({initialDone: true}), 1000)
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    )

    return (
      <Router>
        {
          this.state.initialDone ? routes : <div>加载中...</div>
        }
      </Router>
    )
  }
}

export default App
