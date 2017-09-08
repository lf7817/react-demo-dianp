import React from 'react'
import { Link } from 'react-scroll'
import './style.css'

const Classify = (props) => (
  <div className="city-classify">
    <h2 className="title">更多城市</h2>
    <ul>
      {
        props.classify.map((classify, index) =>
          <li key={index}>
            <Link to={classify.idx} spy={true} smooth={true} duration={500}>
              {classify.idx}
            </Link>
          </li>)
      }
    </ul>
  </div>
)

export default Classify
