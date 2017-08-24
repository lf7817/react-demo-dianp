import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LikeItem from './LikeItem'

class Likes extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div>
        <p>猜你喜欢</p>
        <ul>
          {
            this.props.data.map((item, index) =>
              <LikeItem key={index} {...item}>{item.title}</LikeItem>
            )
          }
        </ul>

      </div>
    )
  }
}

export default Likes
