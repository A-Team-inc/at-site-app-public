/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ateam-inc.com',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', disallow: '/' }]
          }
        }
      }
    }
  ]
}
