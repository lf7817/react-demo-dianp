import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HOST from '../../constants/host'
import axios from 'axios'
import './style.css'

class Activity extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    axios(`${HOST}/assets/json/activity.json`)
      .then(res => {
        this.setState({
          list: res.data.data.list
        })
      })
  }

  render () {
    return (
      <div className="home-activity">
        <div className="item">
          <a href="">11</a>
        </div>
        <div className="item">

        </div>
      </div>
    )
  }
}

export default Activity
