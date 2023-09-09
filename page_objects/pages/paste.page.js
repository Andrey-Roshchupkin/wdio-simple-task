const BasePage = require("./base.page");
const { ContentComponent } = require("../components");

class PastePage extends BasePage {
  constructor() {
    super("");
    this.content = new ContentComponent();
  }
}

module.exports = PastePage;
