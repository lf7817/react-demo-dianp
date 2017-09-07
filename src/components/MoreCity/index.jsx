import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Scroll from 'react-scroll'
import './style.css'

let Link       = Scroll.Link;
let Element    = Scroll.Element;

const Classify = (props) => (
  <div className="city-classify">
    <h2 className="title">更多城市</h2>
    <ul>
      {
        props.classify.map((classify, index) => 
          <li key={index}>
            <Link to={classify.idx} spy={true} smooth={true} duration={500}>
              {classify.idx}
            </Link>
          </li>)
      }
    </ul>
  </div>
)

const CityNav = (props) => (
  <Element name={props.nav.idx} className="city-nav">
    <h2 className="title">{props.nav.idx}</h2>
    <ul>
      {
        props.nav.cities.map((city, index) => 
        <li key={index} onClick={() => props.clickHandle(city.city_name)}>{city.city_name}</li>
        )
      }
    </ul>
  </Element>
)

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
