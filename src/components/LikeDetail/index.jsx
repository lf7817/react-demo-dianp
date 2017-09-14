import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from './Header'
import Image from './Image'
import Cost from './Cost'
import ShopInfo from './ShopInfo'


class LikeDetail extends Component {
  constructor (props) {
    super (props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    return (
      <div>
        <Header />
        <Image />
        <Cost />
        <ShopInfo />
      </div>
    )
  }
}

export default LikeDetail
