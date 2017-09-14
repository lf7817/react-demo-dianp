import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import { withRouter } from 'react-router-dom'
class RouterAnimate extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const animateCls = this.props.animateCls
    return (
      <CSSTransitionGroup
        transitionName={animateCls}
        transitionEnter={true}
        transitionLeave={true}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        >
        <div key={this.props.location.pathname}>
          {this.props.children}
        </div>
      </CSSTransitionGroup>
    )
  }
}

export default withRouter(RouterAnimate)
