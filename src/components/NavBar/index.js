import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap'
import image from './nav-bottom.svg'
import logo from './logo.svg'

const NavBar = ({ title, bg, border, brandImage, children }) => {
    return (
        <>
            <Navbar bg={bg ? bg : 'dark'} variant='dark' expand='sm' style={{ marginBottom: '-1px' }} className={border && 'navbar-border-bottom'}>
                <Container>
                    {title && !brandImage && (
                        <Navbar.Brand href='/' className='font-weight-bold'>
                            <img src={logo} style={{ width: '50px', marginRight: '1rem' }} />
                            {title}
                        </Navbar.Brand>
                    )}
                    {brandImage && (
                        <Navbar.Brand href='/' className='navbar-custom-brand-image'>
                            <img src={brandImage} />
                        </Navbar.Brand>
                    )}
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ml-auto'>
                            {children}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
