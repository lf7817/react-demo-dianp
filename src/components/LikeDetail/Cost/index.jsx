import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Cost = ({ id, cPrice, oPrice }) => (
  <div className="like-detail-cost">
    <div className="bug-wrap">
      <div>
        <span className="n-price"><i>￥</i>{cPrice}</span>
        <span className="o-price"><i>￥</i>{oPrice}</span>
      </div>
      <Link to={`/submit/${id}/${cPrice}`} className="bug">立即购买</Link>
    </div>
    <ul className="advantage">
      <li>
        <i className="easy-Refunds"></i>
        <span>随时可退</span>
      </li>
      <li>
        <i className="dated-Refunds"></i>
        <span>过期自动退</span>
      </li>
    </ul>
  </div>
)

export default Cost
