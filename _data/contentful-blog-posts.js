const { fetchContentfulEntries } = require('../services/contentful')

module.exports = async function fetchContentfulBlogPosts () {
  try {
    return fetchContentfulEntries({content_type: 'blogPost'});
  } catch (error) {
    console.log(`Error from fetchContentfulBlogPosts: ${error}`);
    return 'An error occurred when attempting to fetch the blog posts.'
  }
}