import React from 'react'
import './style.css'

const Header = () => (
  <div className="like-detail-header">
    <span className="back" onClick={() => window.history.go(-1)}>
      <i className="icon-chevron-left"></i>
      返回
    </span>
    <span className="title">团购详情</span>
  </div>
)

export default Header
