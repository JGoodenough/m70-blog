const { fetchContentfulEntries } = require('../services/contentful')

module.exports = async function fetchContentfulPages () {
  try {
    return fetchContentfulEntries({content_type: 'page'});
  } catch (error) {
    console.log(`Error from fetchContentfulPages: ${error}`);
    return 'An error occurred when attempting to fetch the page.'
  }
}