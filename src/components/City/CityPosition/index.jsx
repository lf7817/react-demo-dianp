import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import qq from 'qq'
import './style.css'

class CityPosition extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.showPosition = this.showPosition.bind(this)
    this.showErr = this.showErr.bind(this)
    this.position = this.position.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
    this.state = {
      addr: '',
      district: '',
      city: '',
      province: '',
      type: '',
      adcode: '',
      isSuccess: true,
    }
  }

  componentDidMount () {
    this.geolocation = new qq.maps.Geolocation("OKIBZ-NWK34-UXVUH-XBXF5-PAMPT-OIBLC", "my-map");
    this.position()
  }

  position () {
    this.setState({
      isSuccess: true,
      city: ''
    })
    this.geolocation.getLocation(this.showPosition, this.showErr, {timeout: 15000})
  }

  showPosition (position) {
    let {addr, district, city, province, type, adcode} = position
    this.setState({addr, district, city, province, type, adcode})
  }

  showErr (error) {
    this.setState({
      isSuccess: false
    })
  }

  clickHandle () {
    const cityName = this.state.city 
    this.props.setCity(cityName)
  }

  render () {
    return (
      <div className="city-position">
        <div id="my-map" className="my-map"></div>
        {
          !this.state.isSuccess ? <span className="positioning" onClick={this.position}>无法获取您的位置，点击重试</span> :
            this.state.city !== '' ? 
            <div>
              <span className="guess-city-name" onClick={this.clickHandle}>{this.state.city}</span>
              <span className="position-way" onClick={this.position}>点击重新定位</span>
            </div> : 
            <span className="positioning">定位中</span>
        }
      </div>
    )
  }
}

export default CityPosition
