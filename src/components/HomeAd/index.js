import React from 'react'
import './style.css'

const Ad = ({ list }) => (
  <div className="home-advertisement">
    <p><span className="title"></span></p>
    <ul>
      {
        list.map((item, index)=> (
          <li key={index}>
            <a href={item.link}>
              <img src={item.img} alt={item.title}/>
            </a>
          </li>
        ))
      }
    </ul>
  </div>
)


export default Ad
