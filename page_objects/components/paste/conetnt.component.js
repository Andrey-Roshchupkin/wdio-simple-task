const BaseComponent = require("../base.component");

class ContentComponent extends BaseComponent {
  constructor() {
    super("div.content");
  }

  async isSyntax(syntax) {
    return await this.rootEl.$(`a=${syntax}`).isDisplayed();
  }

  async pasteText() {
    let displayedPaste = "";
    const elementsWithPaste = await this.rootEl.$$(".de1");
    for (let idx = 0; idx < elementsWithPaste.length; idx++) {
      let stringToAdd = await elementsWithPaste[idx].getText();
      if (stringToAdd === " ") stringToAdd = "";
      displayedPaste += stringToAdd;
      if (idx != elementsWithPaste.length - 1) displayedPaste += "\n";
    }
    return displayedPaste;
  }
}

module.exports = ContentComponent;
