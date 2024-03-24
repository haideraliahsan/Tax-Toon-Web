import dynamic from 'next/dynamic'
import React from 'react'

import { CardBody } from 'reactstrap'
import { OrderThisMonthChart } from '../../../../../../../Data/Dashboard/E-commerceData/Chart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const OrderList = () => {
    return (
        <CardBody className='card-body pt-0'>
            <div className='light-card balance-card d-inline-block'>
            </div>
            <div className='order-wrapper'>
                <ReactApexChart type='line' height={235} options={OrderThisMonthChart.options} series={OrderThisMonthChart.series} />
            </div>
        </CardBody>
    )
}

export default OrderList