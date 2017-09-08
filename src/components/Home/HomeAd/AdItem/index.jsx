import React from 'react'

const AdItem = ({className, item}) => (
  <a className={className} href={item.link}>
    <div className="title">
      <h1>{item.adTitle}</h1>
      <h2>{item.adSubTitle}</h2>
    </div>
    <img src={item.thumb} alt=""/>
  </a>
)

export default AdItem
