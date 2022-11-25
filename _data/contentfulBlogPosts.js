const { fetchContentfulEntries } = require('../services/contentful')

module.exports = async function fetchContentfulBlogPosts () {
  try {
    const posts = await fetchContentfulEntries({content_type: 'blogPost'});
    return posts;
  } catch (error) {
    console.log(`Error from fetchContentfulBlogPosts: ${error}`);
    return 'An error occurred when attempting to fetch the blog posts.'
  }
}