import React from 'react'
import './style.css'

const Stars = ({stars, className}) => {
  const percent = (stars * 100 / 5) + '%'
  return (
    <div className={'star ' + className}>
      <span className="star-background"></span>
      <span className="star-high-light" style={{ width: percent}}></span>
    </div>
  )
}

export default Stars