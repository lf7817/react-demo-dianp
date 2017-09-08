import  React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeadLineItem from './HeadLineItem/index'

import './style.css'


class HomeHeadLine extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0,
      isShow: true
    }
  }

  componentDidMount () {
    const len = this.props.list.length
    this.timer = setInterval(() => this.setState({
      index: (this.state.index + 1) % len,
      isShow: !this.state.isShow
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
        <div className="wrapper">  
          <CSSTransitionGroup
            transitionName="move-top"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} >
            {
              this.state.isShow ?
              <HeadLineItem item={list[this.state.index]} /> : null 
            }
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName="move-top"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000} >
            {
              this.state.isShow === false ?
              <HeadLineItem item={list[this.state.index]} /> : null 
            }
          </CSSTransitionGroup>
          
        </div>
      </div>
    )
  }
}

export default HomeHeadLine
