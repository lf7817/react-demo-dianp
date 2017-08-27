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
    this.scrollHandle = this.scrollHandle.bind(this)
    this.state = {
      dpr: window.dpr,
      wrapper: null
    }
  }

  scrollHandle () {
    return throttle(() => {
      console.log(this)
      if (this.props.isLoading) {
        return
      }
      if (!this.props.hasMore) {
        window.removeEventListener('scroll', this.handle)
        return
      }
      this.isLoadMoreFn()
    })
  }

  componentDidMount () {
    this.setState({
      wrapper: this.refs.wrapper
    })
    this.handle = this.scrollHandle()
    window.addEventListener('scroll', this.handle)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handle)
  }

  isLoadMoreFn () {
    const top = this.state.wrapper.getBoundingClientRect().top
    const windowHeight = window.screen.height
    if (top && (top / this.state.dpr) <  windowHeight) {
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
