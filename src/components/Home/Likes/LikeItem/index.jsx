import React from 'react'
import LazyLoad from 'react-lazyload'
import { withRouter } from 'react-router-dom'
import './style.css'

const LikeItem = (props) => (
  <li className="likes-list-item" onClick={() => props.history.push('/likedetail/23963176')}>
    <div className="img-tag">免预约</div>
    <LazyLoad height={180} once >
      <img src={props.defaultPic} alt={props.shopName}/>
    </LazyLoad>
    <div className="item-content">
      <section className="item-content-top">
        <span className="name">{props.shopName}</span>
        <span className="distance">{props.distance}</span>
      </section>
      <section className="item-content-middle">
        <span>{props.dealGroupTitle}</span>
      </section>
      <section className="item-content-bottom">
        <span className="price">
          <strong>￥{props.dealgroupPrice}</strong>
          { props.marketPrice ? <em>￥{props.marketPrice}</em> : null }
        </span>
        <span className="number">{props.salesdesc}</span>
      </section>
    </div>
  </li>
)


export default withRouter(LikeItem)
