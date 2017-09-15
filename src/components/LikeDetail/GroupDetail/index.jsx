import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const GroupList = ({cls, data, cPrice, oPrice}) => (
  <table className={cls}>
    {
      data.map((item, index) => (
        <tbody key={index}>
          <ThItem title={item.title} />
          {
            item.list.map((td, i) => (
              <TdItem key={i} td={td}/>
            ))
          }
        </tbody>
      ))
    }
    <FootItem cPrice={cPrice} oPrice={oPrice}/>
  </table>
)

const ThItem = ({title}) => (
  <tr>
    <th colSpan={3}>{title}</th>
  </tr>
)

const TdItem = ({td}) => (
  <tr>
    <td>{td.name}</td>
    <td>{td.num}份</td>
    <td>{td.price}</td>
  </tr>
)

const FootItem = ({oPrice, cPrice}) => (
  <tbody className="foot">
    <tr>
      <td></td>
      <td className="high-price">最高价值</td>
      <td className="high-price">{oPrice}元</td>
    </tr>
    <tr>
      <td style={{color: '#999'}}>免费提供餐巾纸</td>
      <td className="tuan-price"><strong>团购价</strong></td>
      <td className="tuan-price"><strong>{cPrice}元</strong></td>
    </tr>
  </tbody>
)

const GroupDetail = ({groupBuyDetail, oPrice, cPrice, id}) => {
  return (
    <div className="like-detail-group">
      <h3 className="title">团购详情<i></i></h3>
      <GroupList cls="tab" data={groupBuyDetail} oPrice={oPrice} cPrice={cPrice}/>
      <Link to={`/submit/${id}/${cPrice}`} className='btn'>立即购买</Link>
    </div>
  )
}

export default GroupDetail
