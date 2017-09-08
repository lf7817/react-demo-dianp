import React, { Component } from 'react'
import {Element, animateScroll as scroll} from 'react-scroll'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class CityNav extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const nav = this.props.nav
    return (
      <Element name={nav.idx} className="city-nav">
        <h2 className="title">{nav.idx}</h2>
        <ul>
          {
            nav.cities.map((city, index) => {
              return <li key={index} onClick={() => {
                scroll.scrollToTop()
                this.props.clickHandle(city.city_name)
              }}>{city.city_name}</li>
            })
          }
        </ul>
      </Element>
    )
  }
}

export default CityNav
