require('dotenv').config();
const contentful = require('contentful');
const { documentToHtmlString } = require('@contentful/rich-text-html-renderer');
const { BLOCKS } = require('@contentful/rich-text-types');

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_PROD_ACCESS_TOKEN,
});

const fetchContentfulEntries = async (options = {}) => {
  return await client.getEntries(options);
};

const renderContentfulRichText = (content) => {
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // render the EMBEDDED_ASSET as you need
        return `<img
          src=${`https://${node.data.target.fields.file.url}`}
          height=${node.data.target.fields.file.details.image.height}
          width=${node.data.target.fields.file.details.image.width}
          alt=${node.data.target.fields.description}
        />
      `;
      },
    },
  };
  const rendered = documentToHtmlString(content, renderOptions);
  return rendered;
};

module.exports = {
  fetchContentfulEntries,
  renderContentfulRichText,
};
