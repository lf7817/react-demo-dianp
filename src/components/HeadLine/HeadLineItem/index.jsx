import  React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class HeadLineItem extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const { item } = this.props
    return (
      <a className="item" href={item.url}>
        <p>{item.title}</p>
        <img src={item.pic} alt={item.title} />
        <span className="img-num">{item.picCount}</span>
      </a>
    )
  }
}

export default HeadLineItem
