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

Use these templates to allow the univeral components on your page while also being able to add to them for the websites specific uses.

If the navbar and footer are present on every page, you can put them in the Layout too like this. Otherwise, make some logic for it.

## Layout.js Template
```js
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Layout as ImportedLayout } from "@womens-business-club/wbc-components"

const Layout = ({
    fluid,
    children,
    pageTitle,
    jumbotronBg,
    style,
}) => {
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
                    email
                    phone
                }
            }
        }
    `)

    return (
        <>
            <Navbar />
            <ImportedLayout
                fluid={fluid}
                websiteTitle={data.site.siteMetadata.title}
                pageTitle={pageTitle}
                jumbotronBg={jumbotronBg}
                style={style}
                seoDescription={data.site.siteMetadata.description}
                seoUrl={data.site.siteMetadata.url}
                seoStatcounterProject={
                    data.site.siteMetadata.statcounterProject
                }
                seoStatcounterSecurity={
                    data.site.siteMetadata.statcounterSecurity
                }
                seoEnableManychat={data.site.siteMetadata.enableManychat}
            >
                {children}
            </ImportedLayout>
            <Footer />
        </>
    )
}

export default Layout
```

## Navbar.js Template
```js
import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Nav, NavDropdown } from 'react-bootstrap'


import { Navbar as ImportedNavBar } from '@womens-business-club/wbc-components'

const Navbar = ({bg, border, brandImage}) => {
    const data = useStaticQuery(graphql`
        query {
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
                <Link to='/about' className="dropdown-item">About Us</Link>
            </NavDropdown>
        </ImportedNavBar>
    )
}

export default Navbar
```
