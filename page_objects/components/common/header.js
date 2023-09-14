const BaseComponent = require("../base.component");

class HeaderComponent extends BaseComponent {
  constructor() {
    super("div.header");
  }

  get createNewPasteButton() {
    return this.rootEl.$("a.header__btn");
  }
}

module.exports = HeaderComponent;
