import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from './index'

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
    websiteTitle: 'Default',
    showWebsiteTitle: true,
    pageTitle: 'Page Title',
    jumbotronBg: 'warning',
    navBg: 'danger',
    navBorder: true,
    seoDescription: 'This is a description',
    seoUrl: 'http://www.example.com',
    footerEmail: 'hello@womensbusiness.club',
    footerPhone: '555 555 555'
}
