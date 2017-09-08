import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LikeItem from './LikeItem/index'
import LikeHover from './LikeHover/index'
import { CSSTransitionGroup } from 'react-transition-group'
import './style.css'

class Likes extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.scrollHandle = this.scrollHandle.bind(this)
    this.moveTo = this.moveTo.bind(this)
    this.state = {
      isShow: true,
      dom: null
    }
  }

  componentDidMount () {
    this.setState({
      dom: this.refs.likes
    })
    window.addEventListener('scroll', this.scrollHandle)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandle)
  }

  scrollHandle () {
    if (!this.state.isShow) {
      window.removeEventListener('scroll', this.scrollHandle)
      return
    }
    this.isShowHandle()
  }

  moveTo () {
    let top = this.state.dom.getBoundingClientRect().top
    window.scrollTo(0, top)
  }

  isShowHandle () {
    let top = this.state.dom.getBoundingClientRect().top
    if (top / window.dpr < window.screen.height) {
      this.props.hideLikesHover()
      this.setState({
        isShow: false
      })
    }
  }

  render () {
    let index = Math.floor(Math.random() * this.props.list.length)
    return (
      <div className="home-likes" ref="likes">
        <p className="likes-title">猜你喜欢</p>
        <ul className="likes-list">
          {
            this.props.list.map((item, index) =>
              <LikeItem key={index} {...item} />
            )
          }
        </ul>
        <CSSTransitionGroup
          transitionName="like-hover-hide"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {
            this.props.isShowLikesHover && this.state.isShow ?
              <LikeHover item={this.props.list[index]} onClick={this.moveTo}/>
              : null
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Likes
