import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from './Header'
import Item from './Item'
import Item1 from './Item1'

import './style.css'

class HeadLine extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)

  }

  componentDidMount () {
    console.log('headline')
    if (this.props.headLineList.length === 0) {
      this.props.getHeadLineList()
    }
  }

  render () {
    const headLineList = this.props.headLineList
    return (
      <div className="head-line-list">
        <Header />
        {
          headLineList.length > 0 ? headLineList.map((item, index) => (
            item.good ?
              <Item key={index}
                    href={item.url}
                    pic={item.headPic}
                    provider={item.providerName}
                    category={item.categoryName}
                    title={item.title} /> :
              <Item1 key={index}
                     pic={item.headPic}
                     href={item.url}
                     provider={item.providerName}
                     category={item.categoryName}
                     title={item.title} />
          )) : null
        }
      </div>
    )
  }
}

export default HeadLine
