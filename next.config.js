const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");

const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = {};

module.exports = withFonts(
  withOptimizedImages({
    /* config for next-optimized-images */
    // your config for other plugins or the general next.js here...
  })
);

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
