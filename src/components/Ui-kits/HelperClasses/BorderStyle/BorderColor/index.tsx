import { BorderColorData } from 'Data/Ui-kits/HelperClassData'
import React from 'react'
import { Col } from 'reactstrap'
import { Border_Color } from 'utils/Constant'

const BorderColor = () => {
    return (
        <Col xxl={3} sm={6}>
            <div className='border-wrapper h-100 alert-light-light dark-helper'>
                <h6 className="mb-3">{Border_Color}</h6>
                {
                    BorderColorData && BorderColorData.map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`helper-box border ${item.class}`} />
                            <span>{item.text}</span>
                        </div>
                    ))
                }
            </div>
        </Col>
    )
}

export default BorderColor