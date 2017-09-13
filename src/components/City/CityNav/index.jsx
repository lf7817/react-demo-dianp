import React, { Component } from 'react'
import { Element } from 'react-scroll'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class CityNav extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.clickHandle = this.clickHandle.bind(this)
    this.showMore = this.showMore.bind(this)
    this.state = {
      isShowMore: false
    }
  }

  clickHandle (cityName) {
    this.props.clickHandle(cityName)
  }

  showMore () {
    this.setState({
      isShowMore: true
    })
  }

  render () {
    const nav = this.props.nav
    return (
      <Element name={nav.idx} className="city-nav">
        <h2 className="title">{nav.idx}</h2>
        <ul>
          {
            nav.cities.reduce((arr, city, index) => {
              if (index < 20) {
                arr.push(<li key={index} onClick={() => this.clickHandle(city.city_name)}>{city.city_name}</li>)
              }
              return arr
            }, [])
          }
          {
            nav.cities.length >= 20 ?
              this.state.isShowMore ?
                nav.cities.reduce((arr, city, index) => {
                  if (index >= 20) {
                    arr.push(<li key={index} onClick={() => this.clickHandle(city.city_name)}>{city.city_name}</li>)
                  }
                  return arr
                }, []) : <li onClick={this.showMore}>更多</li>
              : null
          }
        </ul>
      </Element>
    )
  }
}

export default CityNav
