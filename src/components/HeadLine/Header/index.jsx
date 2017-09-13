import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'

const Header = ({ history }) => (
  <div className="head-line-header">
    <span onClick={() => history.push('/')}>
      <i className="icon-chevron-left"></i>
    </span>
    <i className="head-line-logo"></i>
  </div>
)

export default withRouter(Header)
