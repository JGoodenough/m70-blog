const { EleventyEdgePlugin } = require('@11ty/eleventy');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

const { formatDate, getNavItemByKey, formatTime } = require('./utils');
const { renderContentfulRichText } = require('./services/contentful');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('assets/favico');
  eleventyConfig.addPassthroughCopy('styles.css');
  eleventyConfig.addPassthroughCopy('ads.txt');

  eleventyConfig.addFilter('formatDate', formatDate);
  eleventyConfig.addFilter('formatTime', formatTime);
  eleventyConfig.addFilter(
    'renderContentfulRichText',
    renderContentfulRichText
  );
  eleventyConfig.addFilter('getNavItemByKey', getNavItemByKey);
  eleventyConfig.addFilter('getContenfulPageBySlug', (pages, slug) => {
    return pages.find((page) => page.fields.slug === slug);
  });
  eleventyConfig.amendLibrary('md', (mdLib) => mdLib.enable('code'));
  // Opt-in to 11ty Edge
  eleventyConfig.addPlugin(EleventyEdgePlugin);
};
