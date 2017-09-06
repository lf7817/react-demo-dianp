import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class LikeHover extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const item = this.props.item
    return (
      <div className="likes-hover" onClick={this.props.onClick}>
        <img src={item.defaultPic} alt="" />
        <div className="title">
          <h4>{item.shopName}</h4>
          <h5>
            <i className="likes-icon"></i>
            <span>猜你喜欢</span>
          </h5>          
        </div>
        <div className="likes-hover-arrow"></div>
      </div>
    )
  }
}

export default LikeHover
