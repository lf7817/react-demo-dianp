import  React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'
class HeadLineItem extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const { item } = this.props
    return (
      <Link className="item" to='/headLine'>
        <p>{item.title}</p>
        <img src={item.pic} alt={item.title} />
        <span className="img-num">{item.picCount}</span>
      </Link>
    )
  }
}

export default HeadLineItem
