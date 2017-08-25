import React from 'react'
import './style.css'

const LikeItem = (props) => {
  return (
    <li className="likes-list-item">
      <img src={props.img} alt={props.title}/>
      <div className="item-content">
        <section className="item-content-top">
          <span className="name">{props.title}</span>
          <span className="distance">{props.distance}</span>
        </section>
        <section className="item-content-middle">
          <span>{props.subTitle}</span>
        </section>
        <section className="item-content-bottom">
          <span className="price">
            <strong>￥{props.price}</strong>
            { props.primeCost ? <em>￥{props.primeCost}</em> : null }
          </span>
          <span className="number">已售{props.mumber}</span>
        </section>
      </div>
    </li>
  )
}

export default LikeItem
