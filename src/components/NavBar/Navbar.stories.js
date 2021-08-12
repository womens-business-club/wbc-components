import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Navbar from './index'

export default {
    title: 'Navbar',
    component: Navbar,
    // argTypes: {
    //     bg: {control: 'dropdown'}
    // },
}

const Template = (args) => {
    return (
        <Navbar {...args} />
    )
}

export const Default = Template.bind({})

Default.args = {
    bg: '',
    title: 'Navbar Title',
    border: true,
    /** Max height: 50px */
    brandImage: 'http://placehold.co/200x50'
}
