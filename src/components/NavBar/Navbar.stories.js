import React from 'react'
import { Col, Row, Nav, NavDropdown } from 'react-bootstrap'
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
        <Navbar {...args}>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Locations' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/about'>Example 1</NavDropdown.Item>
                <NavDropdown.Item href='/success-story'>Success Story</NavDropdown.Item>
            </NavDropdown>
        </Navbar>
    )
}

export const Default = Template.bind({})

Default.args = {
    bg: '',
    title: 'Navbar Title',
    border: true,
    /** Max height: 50px */
    brandImage: 'http://placehold.co/200x50',
}
