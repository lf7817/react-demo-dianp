import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CityHeader from '../../components/CityHeader'
import SearchCity from '../../components/SearchCity'
import CityPosition from '../../components/CityPosition'

class City extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        <CityHeader />
        <SearchCity />
        <CityPosition />
      </div>
    )
  }
}

export default City
