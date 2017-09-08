import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class HotCity extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)     
  }
 
  render () {
    return (
      <div className="hot-city">
        <h2 className="title">热门城市</h2>
        <ul>
          {
            this.props.list.map((city, index) => 
              <li 
                key={index} 
                onClick={() => this.props.setCity(city.city_name)}>
                {city.city_name}
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default HotCity
