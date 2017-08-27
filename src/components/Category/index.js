import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.css'

class Category extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0
    }
  }

  render () {
    const options = {
      auto: 4000,
      callback: (index) => {
        this.setState({
          index
        })
      }
    }

    return (
      <div className="home-cateory">
        <ReactSwipe swipeOptions={options}>
          <div className="carousel-item">
            <ul>
              <li><i className="item-food"></i><span>美食</span></li>
              <li><i className="item-movie"></i><span>电影</span></li>
              <li><i className="item-hotel"></i><span>酒店</span></li>
              <li><i className="item-entertainment"></i><span>休闲娱乐</span></li>
              <li><i className="item-take-out-food"></i><span>外卖</span></li>
              <li><i className="item-hot-pot"></i><span>火锅</span></li>
              <li><i className="item-beauty"></i><span>丽人</span></li>
              <li><i className="item-around"></i><span>周边游</span></li>
              <li><i className="item-ktv"></i><span>KTV</span></li>
              <li><i className="item-hunshasheying"></i><span>婚纱摄影</span></li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul>
              <li><i className="item-life-service"></i><span>生活服务</span></li>
              <li><i className="item-tourist"></i><span>景点</span></li>
              <li><i className="item-aiche"></i><span>爱车</span></li>
              <li><i className="item-sport"></i><span>健身运动</span></li>
              <li><i className="item-buy"></i><span>购物</span></li>
              <li><i className="item-children"></i><span>亲子</span></li>
              <li><i className="item-furniture"></i><span>家装</span></li>
              <li><i className="item-study"></i><span>学习培训</span></li>
              <li><i className="item-health"></i><span>医疗健康</span></li>
              <li><i className="item-home"></i><span>到家</span></li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul>
              <li><i className="item-xiaochi"></i><span>小吃快餐</span></li>
              <li><i className="item-zizhu"></i><span>自助餐</span></li>
              <li><i className="item-tokyo-food"></i><span>日料</span></li>
              <li><i className="item-hair"></i><span>没发</span></li>
              <li><i className="item-meijiameitong"></i><span>美甲美瞳</span></li>
              <li><i className="item-spa"></i><span>SPA</span></li>
              <li><i className="item-shoushen"></i><span>瘦身纤体</span></li>
              <li><i className="item-qinzisheying"></i><span>亲子摄影</span></li>
              <li><i className="item-qinziyoule"></i><span>亲子游乐</span></li>
              <li><i className="item-all-category"></i><span>全部分类</span></li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="carousel-index">
          <span className={this.state.index === 0 ? 'active': ''}></span>
          <span className={this.state.index === 1 ? 'active': ''}></span>
          <span className={this.state.index === 2 ? 'active': ''}></span>
        </div>
      </div>
    )
  }
}

export default Category
