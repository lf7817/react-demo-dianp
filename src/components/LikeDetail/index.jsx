import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from './Header'
import Image from './Image'
import Cost from './Cost'
import ShopInfo from './ShopInfo'
import GroupDetail from './GroupDetail'
import HOST from '@/constants/host'
import axios from 'axios'


class LikeDetail extends Component {
  constructor (props) {
    super (props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: null
    }
  }

  async componentDidMount () {
    const groupId = this.props.match.params.groupId
    const res = await axios(`${HOST}/assets/json/${groupId}.json`)
    this.setState({
      data: res.data
    })
  }

  render () {
    const data = this.state.data
    return data ? (
      <div>
        <Header />
        <Image
          shopName={data.shopName}
          subName={data.subName}
          img={data.imgList}/>
        <Cost
          oPrice={data.o_price}
          cPrice={data.c_price}
          id={data.id}/>
        <ShopInfo
          branchName={data.branchName}
          shopName={data.shopName}
          stars={data.stars}
          addr={data.address}
          distance={data.distance}
          tel={data.phoneNo}/>
        <GroupDetail
          groupBuyDetail={data.groupBuyDetail}
          oPrice={data.o_price}
          cPrice={data.c_price}
          id={data.id}/>
      </div>
    ) : null
  }
}

export default LikeDetail
