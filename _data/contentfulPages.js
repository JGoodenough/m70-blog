const { fetchContentfulEntries } = require('../services/contentful')

module.exports = async function fetchContentfulPages () {
  try {
    const response = await fetchContentfulEntries({content_type: 'page'});
    const pages = response.items.reduce((hashedItems, currentItem) => {
      return {
        ...hashedItems,
        [currentItem.fields.slug]: currentItem.fields
      }
    }, {});
    return pages;
  } catch (error) {
    console.log(`Error from fetchContentfulPages: ${error}`);
    return 'An error occurred when attempting to fetch the page.'
  }
}