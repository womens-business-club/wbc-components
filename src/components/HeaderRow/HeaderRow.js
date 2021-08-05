import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HeaderRow = ({ title, page }) => {
    return page ? (
        <Row className='mt-5'>
            <Col>
                <h1>{title}</h1>
            </Col>
        </Row>
    ) : (
        <Row className='mt-7'>
            <Col>
                <h2 className='mb-0'>{title}</h2>
                <hr className='mt-0' />
            </Col>
        </Row>
    )
}

export default HeaderRow
