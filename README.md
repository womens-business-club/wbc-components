# Women's Business Club React Components

## Install
```
npm i git@github.com:womens-business-club/wbc-components.git
```

## Setup
1. Add `@import '~@womens-business-club/wbc-components/dist/base.scss';` to your main .scss file. This will import bootstrap styling modified for the wbc brand.
2. Layout - Create a file called Layout.js in your components folder. Copy and past the template below into that file.



## Layout.js Template
```js
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout as ImportedLayout } from '@womens-business-club/wbc-components'

const Layout = ({ fluid, footer, children, showWebsiteTitle, pageTitle, jumbotronBg, navBg, style }) => {
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
        <ImportedLayout fluid={fluid} footer={footer} websiteTitle={data.site.siteMetadata.title} showWebsiteTitle={showWebsiteTitle} pageTitle={pageTitle} jumbotronBg={jumbotronBg} style={style} navBg={navBg} footerChildren={<FooterChildren data={data} />} seoDescription={data.site.siteMetadata.description} seoUrl={data.site.siteMetadata.url} seoStatcounterProject={data.site.siteMetadata.statcounterProject} statcounterSecurity={data.site.siteMetadata.statcounterSecurity} seoEnableManychat={data.site.siteMetadata.enableManychat} footerEmail={data.site.siteMetadata.email} footerPhone={data.site.siteMetadata.phone}>{children}</ImportedLayout>
    )
}

const FooterChildren = ({data}) => (
    <p>Footer children example</p>
)

export default Layout

```
