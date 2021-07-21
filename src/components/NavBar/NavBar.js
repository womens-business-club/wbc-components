import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import image from './nav-bottom.svg'

const NavBar = ({ title, navBg }) => {
    return (
        <>
            <Navbar bg={navBg ? navBg : 'primary'} variant='dark' expand='lg' style={{ marginBottom: '-1px' }}>
                <Container>
                    {showTitle && <Navbar.Brand href='/'>{title}</Navbar.Brand>}
                    {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
                    {/* <Navbar.Collapse id='basic-navbar-nav'> */}
                    <Nav className='ml-auto'>{/* <NavDropdown title="Discover" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/about">
                            About Us
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/success-story">
                            Success Story
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Button className="ml-3">Sign In</Button> */}</Nav>
                    {/* </Navbar.Collapse> */}
                </Container>
            </Navbar>
            <img src={image} className='mb-5' alt='' />
        </>
    )
}

export default NavBar
