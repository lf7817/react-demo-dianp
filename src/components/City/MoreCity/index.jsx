import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CityNav from '../CityNav/index'
import Classify from '../Classify/index'

import './style.css'

class MoreCity extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  
  render () {
    return (
      <div className="more-city">
        <Classify classify={this.props.classify}/>
        {
          this.props.nav.map((item, index) => 
            <CityNav nav={item} key={index} clickHandle={this.props.setCity}/>
          )
        }
      </div>
    )
  }
}

export default MoreCity
