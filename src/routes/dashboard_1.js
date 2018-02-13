import React, {PropTypes} from 'react'

import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import RecentSales from '../components/dashboard/recentSales'
import styles from './dashboard.less'
import {color} from '../utils'

const bodyStyle = {
  bodyStyle: {
    minHeight: 510,
    background: '#fff'
  }
}
const cardStyle = {

   bodyStyle: {
    minHeight: 120,
    background: '#fff',
    float:"left"
  }
} 
function Dashboard({dashboard, dispatch}) {
  const {
    dashboardCard,
    numbers_2,
    recentSales_2,
    recentSales_3,
    numbers,
  } = dashboard
  const numberCards = dashboardCard.map((item, key) =>
   
  <Col key={key} lg={8} md={12}>
    {console.log("item",item)}
    <NumberCard {...item}/>
  </Col>)


  return (
  
    <div className="dashboard-2" >
      <Row gutter={28} >
        {numberCards}
      </Row>
      <Row gutter={22}>
        <Col lg={12} md={24}>
          <Card {...cardStyle}>
            <RecentSales data={recentSales_2}/>
          </Card>
        </Col>
        <Col lg={12} md={24}>
          <Card {...cardStyle}>
            <RecentSales data={recentSales_3}/>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

Dashboard.propTypes = {
  dashboardCard: PropTypes.array,
  numbers_2: PropTypes.array,
  recentSales_2: PropTypes.array,
  recentSales_3: PropTypes.array
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)
