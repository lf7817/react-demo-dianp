import  React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AdItem from './AdItem'
import './style.css'

class HomeAd extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div className={this.props.className}>
        {
          this.props.list.map((item, index) => (
            <AdItem key={index} item={item} className="item"/>
          ))
        }
      </div>
    )
  }
}

export default HomeAd
