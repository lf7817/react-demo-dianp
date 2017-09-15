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
    const { branchName, shopName, stars, distance, tel, addr } = this.props
    return (
      <div className="like-detail-shop">
        <h3 className="top">适用商户</h3>
        <div className="middle">
          <div className="left">
            <h3>{`${shopName}(${branchName})`}</h3>
            <div>
              <Stars className="ad" stars={stars}/>
              <span>{distance}</span>
            </div>
          </div>
          <div className="right">
            <a href={`tel:${tel}`}>
              <i className="mobile"></i>
            </a>
          </div>
        </div>
        <p className="bottom">
          <span><i></i>{addr}</span>
      </p>
      </div>
    )
  }
}

export default ShopInfo
