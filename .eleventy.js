const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const { formatDate } = require('./utils');
const { renderContentfulRichText } = require('./services/contentful');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('renderContentfulRichText', renderContentfulRichText);
}