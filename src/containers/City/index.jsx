import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CityHeader from '../../components/CityHeader'

class City extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div>
        <CityHeader />
      </div>
    )
  }
}

export default City
