import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Stars from 'components/Stars'
import './style.css'

class ShopInfo extends Component {
  constructor (props) {
    super (props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div className="like-detail-shop">
        <h3 className="top">适用商户（1）</h3>
        <div className="middle">
          <div className="left">
            <h3>馋猫食堂(义乌青年广场店)</h3>
            <div>
              <Stars className="ad" num={4.5}/>
              <span>>100km</span>
            </div>
          </div>
          <div className="right">
            <a href="tel:110">
              <i className="mobile"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default ShopInfo
