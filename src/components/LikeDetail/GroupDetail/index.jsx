import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const groupBuyDetail = [{
  title: '定食3选1(不可重复选)',
  list: [{
    name: '猪排咖喱饭',
    num: 1,
    price: '28元'
  },{
    name: '香川鳕鱼饭',
    num: 1,
    price: '22元'
  },{
    name: '王子炒饭',
    num: 1,
    price: '26元'
  }]
},{
  title: '小食3选1(不可重复选)',
  list: [{
    name: '日式土豆丸',
    num: 1,
    price: '9元'
  },{
    name: '微笑土豆饼',
    num: 1,
    price: '10元'
  },{
    name: '中华海草',
    num: 1,
    price: '7元'
  }]
}]

const GroupList = ({cls, data}) => (
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
    <FootItem />
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

const FootItem = () => (
  <tbody className="foot">
    <tr>
      <td></td>
      <td className="high-price">最高价值</td>
      <td className="high-price">42元</td>
    </tr>
    <tr>
      <td style={{color: '#999'}}>免费提供餐巾纸</td>
      <td className="tuan-price"><strong>团购价</strong></td>
      <td className="tuan-price"><strong>23.9元</strong></td>
    </tr>
  </tbody>
)

const GroupDetail = (props) => {
  return (
    <div className="like-detail-group">
      <h3 className="title">团购详情<i></i></h3>
      <GroupList cls="tab" data={groupBuyDetail}/>
      <Link to='/' className='btn'>立即购买</Link>
    </div>
  )
}

export default GroupDetail
