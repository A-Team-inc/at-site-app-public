const path = require(`path`)

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ["node_modules"],
      alias: {
        ScrollMagic: "scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
        "animation.gsap":
          "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
        "debug.addIndicators":
          "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js",
      },
    },
  })
}
