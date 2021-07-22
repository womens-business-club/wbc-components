import * as React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
// import { Seo } from '../Seo'

const Layout = ({ fluid, footer, children, title, pageTitle, jumbotronBg, style, navBg, footerChildren }) => {
// const Layout = () => {
    // return <p>layout</p>

    return (
        <>
            {/* <Seo title={title} /> */}
            {title && <NavBar navBg={navBg} title={title} />}
            {pageTitle && (
                <Jumbotron className={jumbotronBg ? `bg-${jumbotronBg} text-white` : `bg-dark text-white`}>
                    <Container>
                        <h1 className='display-3 font-weight-bold'>{pageTitle}</h1>
                    </Container>
                </Jumbotron>
            )}
            <Container style={{ ...style, overflow: 'hidden' }} fluid={fluid}>
                {children}
            </Container>
            {footer && <Footer>{footerChildren}</Footer>}
        </>
    )
}

Layout.propTypes = {
    /** If true, the main container will be fluid. */
    fluid: PropTypes.bool,
    footer: PropTypes.bool,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    pageTitle: PropTypes.string,
    /** Background color for the jumbotron. Use boostrap theme colours (primary, danger, etc) */
    jumbotronBg: PropTypes.string,
    style: PropTypes.object,
    navBg: PropTypes.string,
    footerChildren: PropTypes.node
}

Layout.defaultProps = {
    fluid: false,
    footer: true,
    showTitle: true,
    pageTitle: 'PAGE TITLE',
}

export default Layout
