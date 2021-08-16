import React from 'react'
import Helmet from 'react-helmet'

const Seo = ({title, websiteTitle, description, url, statcounterProject, statcounterSecurity, enableManychat}) => {
    const pageTitle = title ? `${title} - ${websiteTitle}` : websiteTitle
    const image = `/img/og-image.png`
    const favicon = `/img/favicon.svg`
    // 1200 pixels x 627 pixels

    return (
        <Helmet>
            <title>{pageTitle}</title>

            <link rel="icon" href={favicon} />

            <meta name="description" content={description} />
            <meta name="image" content={image} />

            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="wombizclub" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* StatCounter */}
            <script type='text/javascript'>
                {`
                    var sc_project=${statcounterProject}; 
                    var sc_invisible=1; 
                    var sc_security="${statcounterSecurity}"; 
                `}
            </script>
            <script type='text/javascript' src='https://www.statcounter.com/counter/counter.js' async />
            <noscript>
                {`
                    <div class="statcounter"><a title="Web Analytics"
                    href="https://statcounter.com/" target="_blank"><img
                    class="statcounter"
                    src="https://c.statcounter.com/${statcounterProject}/0/${statcounterSecurity}/1/"
                    alt="Web Analytics"></a></div>
                `}
            </noscript>

            {/* Facebook Pixel */}
            <script>
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '273163263693055');
                    fbq('track', 'PageView');
                `}
            </script>
            <noscript>
                {`
                    <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=273163263693055&ev=PageView&noscript=1"
                    />
                `}
            </noscript>

            {/* ManyChat */}
            {enableManychat && <script src="//widget.manychat.com/100627041859174.js" async="async"></script>}

            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112106197-1"></script>
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());  gtag('config', 'UA-112106197-1');
                `}
            </script>

            {/* LinkedIn */}
            <script type="text/javascript">
                {`
                    _linkedin_partner_id = "86082";
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                `}
            </script>
            <script type="text/javascript">
                {`
                    (function(){var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);})();
                `}
            </script>
            <noscript>
                {`
                    <img height="1" width="1" style="display:none;" alt="" src="https://dc.ads.linkedin.com/collect/?pid=86082&fmt=gif" />
                `}
            </noscript>
        </Helmet>
    )
}

export default Seo
