import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from './Layout'

export default {
    title: 'Layout',
    component: Layout,
    // argTypes: {
    //     fluid: {control: 'bool'}
    // },
}

const Template = (args) => {
    return (
        <Layout {...args}>
            <Row className="mt-5">
                <Col>
                    <p>This is a layout</p>
                </Col>
            </Row>
        </Layout>
    )
}

export const Default = Template.bind({})

Default.args = {
    fluid: false,
    footer: true,
    title: 'Default',
    pageTitle: 'Page Title',
    jumbotronBg: '',
    
}
