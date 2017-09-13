import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class HeadLine extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const { pic, provider, category, title, href } = this.props
    return (
      <a className="head-line-item" href={href}>
        <img src={pic} alt={title}/>
        <h1 className="title">{title}</h1>
        <div className="tag">
          <span className="category">{category}</span>
          <span className="provider">{provider}</span>
        </div>
      </a>
    )
  }
}

export default HeadLine
