/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "A-Team - Software development agency",
    titleTemplate: "A-Team - Software development agency",
    description: "We are A-Team, software development company with great experience! We are proposing our expertise to help your business grow. Our expertise is full-cycle software development.",
    meta: '',
    url: "https://ateam-inc.com",
    image: "/images/seoImg.jpg",
    twitterUsername: "",
    siteUrl: 'https://ateam-inc.com'
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: 'GTM-M59MMF4',
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: "G-YJ3VW1LXW1",
          anonymize_ip: true,
          cookie_expires: 0,
        },
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ateam-inc.com',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    }
  ]
}
