import * as React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from '../NavBar'
import Footer from '../Footer'
import { Seo } from '../Seo'

const Layout = ({ fluid, footer, children, showTitle, pageTitle, jumbotronBg, style, navBg, title }) => {
// const Layout = () => {
    // return <p>layout</p>

    return (
        <>
            <Seo title={title} />
            {/* {showTitle && <NavBar navBg={navBg} showTitle={showTitle} />} */}
            {/* {pageTitle && (
                <Jumbotron className={jumbotronBg ? `bg-${jumbotronBg} text-white` : `bg-secondary text-white`}>
                    <Container>
                        <h1 className='display-3 font-weight-bold'>{pageTitle}</h1>
                    </Container>
                </Jumbotron>
            )} */}
            <Container style={{ ...style, overflow: 'hidden' }} fluid={fluid}>
                {children}
            </Container>
            {/* {footer && <Footer />} */}
        </>
    )
}

Layout.propTypes = {
    /** If true, the main container will be fluid. */
    fluid: PropTypes.bool,
    footer: PropTypes.bool,
    showTitle: PropTypes.bool,
    pageTitle: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
    fluid: false,
    footer: false,
    showTitle: true,
    pageTitle: 'PAGE TITLE',
}

export default Layout
