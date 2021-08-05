import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Seo from '../Seo'

const Layout = ({ fluid, footer, children, websiteTitle, showWebsiteTitle, pageTitle, jumbotronBg, style, navBg, footerChildren, seoDescription, seoUrl, seoStatcounterProject, seoStatcounterSecurity, seoEnableManychat }) => {
    return (
        <>
            <Seo title={pageTitle} websiteTitle={websiteTitle} description={seoDescription} url={seoUrl} statcounterProject={seoStatcounterProject} statcounterSecurity={seoStatcounterSecurity} enableManychat={seoEnableManychat} />
            {showWebsiteTitle && <NavBar bg={navBg} title={websiteTitle} />}
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

export default Layout
