import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

class SearchCity extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div className="city-search">
        <i className="icon-search"></i>
        <input type="text" placeholder="输入城市名或拼音查询"/>        
      </div>
    )
  }
}

export default SearchCity
