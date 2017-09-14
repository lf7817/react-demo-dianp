import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'

import './style.css'

class HomeHeader extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    return (
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/city" className="city-name" onClick={() => this.props.setAnimate('left')}>
            <span>{this.props.cityName}</span>
            <i className="icon-angle-down"></i>
          </Link>
        </div>

        <div className="home-header-center">
          <i className="icon-search"></i>
          <input type="text" placeholder="输入商户名、地点"/>
        </div>

        <div className="home-header-right">
          <a href="/#/">用户中心</a>
        </div>
      </div>
    )
  }
}

export default HomeHeader
