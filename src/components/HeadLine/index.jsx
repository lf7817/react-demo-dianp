import  React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.css'

const Item = ({ item }) => (
  <a className="item" href={item.url}>
    <p>{item.title}</p>
    <img src={item.pic} alt={item.title} />
    <span className="img-num">{item.picCount}</span>
  </a>
)

class HeadLine extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => this.setState({
      index: (this.state.index + 1) % 5
    }), 4000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const list = this.props.list
    return (
      <div className="home-head-line">
        <span className="title"></span>
        <Item item={list[this.state.index]}/>
      </div>
    )
  }
}

export default HeadLine
