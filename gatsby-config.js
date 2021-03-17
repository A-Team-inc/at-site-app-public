/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Websites creation from scratch",
    titleTemplate: "A-Team",
    description: "We can everything you want and do it good",
    url: "https://ateam-inc.com", // No trailing slash allowed!
    image: "/images/seoImg.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: " ",
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
