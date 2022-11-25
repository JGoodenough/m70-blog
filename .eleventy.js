const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const { formatDate, getNavItemByKey } = require('./utils');
const { renderContentfulRichText } = require('./services/contentful');


module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('renderContentfulRichText', renderContentfulRichText);
  eleventyConfig.addFilter('getNavItemByKey', getNavItemByKey);
  eleventyConfig.addFilter('getContenfulPageBySlug', (pages, slug) => {
    return pages.find(page => page.fields.slug === slug)
  })
}