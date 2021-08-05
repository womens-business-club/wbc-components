import React from 'react'
import { Section } from '../Section'
import img from './footer-top.svg'
import { Container, Row, Col, Nav } from 'react-bootstrap'

import facebook from './facebook.svg'
import instagram from './instagram.svg'
import youtube from './youtube.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'

const Footer = ({email, phone, children}) => {
    return (
        <Section bg='none' color='dark' className='mt-5' style={{ background: `url(${img}) no-repeat`, backgroundSize: 'cover', paddingTop: '13rem', paddingBottom: '6.5rem' }}>
            <Container>
                {children}
                <Row className='mt-4'>
                    <Col>
                        <a href="https://womensbusiness.club" target='_blank' rel='noreferrer' className="text-dark">womensbusiness.club</a>
                    </Col>
                    <Col className='text-dark text-md-right'>
                        <h5>Contact</h5>
                        <p>
                            {email}
                            <br />
                            {phone}
                        </p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={12} md={6} className='text-dark'>
                        <p>Women's Business Club © {new Date().getFullYear()}</p>
                    </Col>
                    <Col className='text-md-right'>
                        <SocialLink url='https://www.facebook.com/wombizclub' service='facebook' img={facebook} />
                        <SocialLink url='https://instagram.com/wombizclub' service='instagram' img={instagram} />
                        <SocialLink url='https://www.youtube.com/user/wombizclub' service='youtube' img={youtube} />
                        <SocialLink url="https://www.linkedin.com/company/women's-business-club/" service='linkedin' img={linkedin} />
                        <SocialLink url='https://twitter.com/wombizclub' service='twitter' img={twitter} />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

// Make sure the icon filename is the same as the service here.
const SocialLink = ({ url, service, img }) => (
    <a href={url} target='_blank' rel='noreferrer' className='ml-3'>
        <img
            src={img}
            alt={service}
        />
    </a>
)

export default Footer
