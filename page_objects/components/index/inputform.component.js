const BaseComponent = require("../base.component");

class InputFormComponent extends BaseComponent {
  constructor() {
    super("form.js-create-form");
  }

  textInput(name) {
    const inputs = {
      postform: "postform-text",
      tags: "postform-category_id",
      password: "postform-password",
      pastename: "postform-name",
    };
    return this.rootEl.$(`#${inputs[name.toLowerCase()]}`);
  }

  selectInput(name) {
    const inputs = {
      category: "field-postform-category_id",
      syntax: "field-postform-format",
      expiration: "field-postform-expiration",
      exposure: "field-postform-status",
    };
    return this.rootEl.$(`.${inputs[name.toLowerCase()]} div > span`);
  }

  selectInputOption(optionName) {
    return $(`li=${optionName}`);
  }

  get submitButton() {
    return this.rootEl.$("button[type='submit']");
  }
}

module.exports = InputFormComponent;
