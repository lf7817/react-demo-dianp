import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const LikeItem = ({ title, price}) => (
  <ul>
    <li>{title}</li>
    <li>{price}</li>
  </ul>
)

export default LikeItem