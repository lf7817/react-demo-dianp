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
          <Link to="/city" className="city-name">
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"></i>
          </Link>
        </div>

        <div className="home-header-center">
          <i className="icon-search"></i>
          <input type="text" placeholder="请输入关键字"/>
        </div>

        <div className="home-header-right">
          <i className="icon-user"></i>
        </div>
      </div>
    )
  }
}

export default HomeHeader
