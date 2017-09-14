import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CityHeader from './CityHeader'
import SearchCity from './SearchCity'
import CityPosition from './CityPosition'
import HotCity from './HotCity'
import MoreCity from './MoreCity'

import localStore from '@/utils/localStore'
import { CITYNAME } from 'constants/localStoreKey'
import axios from 'axios'
import HOST from 'constants/host'

class City extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.setAnimate = this.setAnimate.bind(this)
    this.state = {
      data: null
    }
  }

  componentDidMount () {
    console.log('city')
    this.requestCity()
  }


  async requestCity () {
    const res = await axios(`${HOST}/assets/json/city.json`)
    this.setState({
      data: res.data.data
    })
  }

  changeCity (cityName) {
    if (cityName == null) {
      return
    }
    this.props.setCity(cityName)
    localStore.setItem(CITYNAME, cityName)
    this.props.history.push('/')
  }

  setAnimate (cls) {
    this.props.setRouterAnimate(cls)
  }

  render () {
    return (
      <div>
        <CityHeader setAnimate={this.setAnimate}/>
        <SearchCity />
        <CityPosition setCity={this.changeCity}/>
        {
          this.state.data == null ? null :
            <div>
              <HotCity list={this.state.data.hotCity_nav} setCity={this.changeCity}/>
              <MoreCity nav={this.state.data.city_nav}
                        classify={this.state.data.classify_nav}
                        setCity={this.changeCity} />
            </div>
        }
      </div>
    )
  }
}

export default City
