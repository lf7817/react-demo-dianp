import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import HOST from '@/constants/host'
import './style.css'

const imgArrs = [
  'detail1.jpg',
  'detail2.jpg',
  'detail3.jpg',
  'detail4.jpg'
]

class Image extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0
    }
  }

  render () {
    const options = {
      auto: 2000,
      callback: (index) => {
        this.setState({
          index
        })
      }
    }
    return (
      <div className='like-detail-images'>
        <ReactSwipe swipeOptions={options}>
          {
            imgArrs.map((item, index) => (
              <img key={index} src={`${HOST}/assets/images/${item}`} alt="馋猫食堂"/>
            ))
          }
        </ReactSwipe>
        <div className="img-title">
          <h3>馋猫食堂</h3>
          <p>仅售23.9元！最高价值42元的套餐饭系列，建议单人使用，提供免费WiFi。</p>
        </div>
        <div className="img-num"><span>{this.state.index + 1}</span>/4</div>
      </div>
    )
  }
}

export default Image
