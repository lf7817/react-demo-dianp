import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LikeItem from './LikeItem'

import './style.css'

class Likes extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div className="home-likes">
        <p className="likes-title">猜你喜欢</p>
        <ul className="likes-list">
          {
            this.props.data.map((item, index) =>
              <LikeItem key={index} {...item} />
            )
          }
        </ul>

      </div>
    )
  }
}

export default Likes
