# Women's Business Club React Components

## TO DO
- [ ] Separate Navbar and Footer from the Layout - Though it is nice to simply import <Layout />, it will be easier to maintain everything when they are separate.
- [ ] Storybook story to HeaderRow

## Install
```
npm i git@github.com:womens-business-club/wbc-components.git
```

## Setup
1. Add `@import '~@womens-business-club/wbc-components/dist/base.scss';` to your main .scss file. This will import bootstrap styling modified for the wbc brand.
2. Layout - Create a file called Layout.js in your components folder. Copy and past the template below into that file.


# Templates

Use these teamplates to allow the univeral components on your page while also being able to add to them for the websites specific uses.

## Layout.js Template
```js
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout as ImportedLayout } from '@womens-business-club/wbc-components'

const Layout = ({ fluid, footer, children, showWebsiteTitle, pageTitle, jumbotronBg, navBg, navBrandImage, style }) => {
    const data = useStaticQuery(graphql`
        query SiteQuery {
            site {
                siteMetadata {
                    title
                    description
                    url
                    statcounterProject
                    statcounterSecurity
                    enableManychat
                    phone
                    email
                }
            }
        }
    `)

    return (
        <ImportedLayout fluid={fluid} footer={footer} websiteTitle={data.site.siteMetadata.title} showWebsiteTitle={showWebsiteTitle} pageTitle={pageTitle} jumbotronBg={jumbotronBg} style={style} navBg={navBg} navBorder={navBorder} navBrandImage={navBrandImage} footerChildren={<FooterChildren data={data} />} seoDescription={data.site.siteMetadata.description} seoUrl={data.site.siteMetadata.url} seoStatcounterProject={data.site.siteMetadata.statcounterProject} statcounterSecurity={data.site.siteMetadata.statcounterSecurity} seoEnableManychat={data.site.siteMetadata.enableManychat} footerEmail={data.site.siteMetadata.email} footerPhone={data.site.siteMetadata.phone}>{children}</ImportedLayout>
    )
}

const FooterChildren = ({data}) => (
    <p>Footer children example</p>
)

export default Layout

```

## Navbar.js Template
```js
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Nav, NavDropdown } from 'react-bootstrap'


import { Navbar as ImportedNavBar } from '@womens-business-club/wbc-components'

const Navbar = ({bg, border, brandImage}) => {
    const data = useStaticQuery(graphql`
        query SiteQuery {
            site {
                siteMetadata {
                    title
                    description
                    url
                    statcounterProject
                    statcounterSecurity
                    enableManychat
                    phone
                    email
                }
            }
        }
    `)

    return (
        <ImportedNavBar title={data.site.siteMetadata.title} bg={bg} border={border} brandImage={brandImage}>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Locations' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/about'>About Us</NavDropdown.Item>
                <NavDropdown.Item href='/success-story'>Success Story</NavDropdown.Item>
            </NavDropdown>
        </ImportedNavBar>
    )
}

export default Navbar
```
