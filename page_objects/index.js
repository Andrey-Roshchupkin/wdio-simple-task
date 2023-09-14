const IndexPage = require("./pages/index.page");
const PasrePage = require("./pages/paste.page");

/**
 * @param name {"index"|"paste"}
 * @returns {IndexPage|PastePage}
 */

function page(name) {
  const pages = {
    index: new IndexPage(),
    paste: new PasrePage(),
  };
  return pages[name.toLocaleLowerCase()];
}

module.exports = page;
