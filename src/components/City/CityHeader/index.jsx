import React from 'react'
import './style.css'

const Header = (props) => (
  <div className="city-header">
    <span onClick={() => {
      props.setAnimate('right')
      window.history.back()
    }}>
      <i className="icon-chevron-left"></i>
    </span>
    <div>
      <button className="active">国内</button>
      <button>海外</button>
    </div>
  </div>
)

export default Header
