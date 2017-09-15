import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.css'

class Image extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0
    }
  }

  render () {
    const { shopName, subName, img } = this.props
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
            img.map((item, index) => (
              <img key={index} src={item} alt="馋猫食堂"/>
            ))
          }
        </ReactSwipe>
        <div className="img-title">
          <h3>{shopName}</h3>
          <p>{subName}</p>
        </div>
        <div className="img-num"><span>{this.state.index + 1}</span>/4</div>
      </div>
    )
  }
}

export default Image
