import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Seo from '../Seo'

const Layout = ({ fluid, footer, children, websiteTitle, pageTitle, jumbotronBg, style, seoDescription, seoUrl, seoStatcounterProject, seoStatcounterSecurity, seoEnableManychat }) => {
    return (
        <>
            <Seo title={pageTitle} websiteTitle={websiteTitle} description={seoDescription} url={seoUrl} statcounterProject={seoStatcounterProject} statcounterSecurity={seoStatcounterSecurity} enableManychat={seoEnableManychat} />
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
        </>
    )
}

export default Layout
