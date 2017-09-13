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
      <a className="head-line-item1" href={href}>
        <div className="left">
          <div>
            <h1 className="title">{title}</h1>
            <span className="provider">{provider}</span>
          </div>
         <p className="category">{category}</p>
        </div>
        <img src={pic} alt={title}/>
      </a>
    )
  }
}

export default HeadLine
