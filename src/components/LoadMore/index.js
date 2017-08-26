import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import throttle from '../../utils/throttle'
import './style.css'

class LoadMore extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.loadMoreFnc = this.loadMoreFnc.bind(this)
    this.isLoadMoreFn = this.isLoadMoreFn.bind(this)
  }

  componentDidMount () {
    const handle = throttle(() => {
      console.log(2)
      if (this.props.isLoading) {
        return
      }
      if (!this.props.hasMore) {
        window.removeEventListener('scroll', handle)
        return
      }
      this.isLoadMoreFn()
    })
    window.addEventListener('scroll', handle)
  }

  isLoadMoreFn () {
    const dpr = window.dpr // 从flexible.js读的
    const wrapper = this.refs.wrapper
    const top = wrapper.getBoundingClientRect().top
    const windowHeight = window.screen.height
    if (top && (top / dpr) <  windowHeight) {
      this.loadMoreFnc()
    }
  }

  loadMoreFnc () {
    this.props.loadMoreHandle()
  }

  render () {
    const { hasMore, isLoading } = this.props
    return  (
      <div className="load-more" ref="wrapper">
        {
          hasMore === false ?
            <span>没有更多了</span> :
            isLoading === true ?
              <span>加载中...</span> :
              <span onClick={this.loadMoreFnc}>加载更多</span>
        }
      </div>
    )
  }
}

export default LoadMore
