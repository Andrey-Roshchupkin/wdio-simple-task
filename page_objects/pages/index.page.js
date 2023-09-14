const BasePage = require("./base.page");
const { InputFormComponent } = require("../components");

class IndexPage extends BasePage {
  constructor() {
    super("https://pastebin.com");
    this.inputForm = new InputFormComponent();
  }

  async createNewPasteAndSave(testData) {
    // 2. Create a New Paste with the following details:
    await this.header.createNewPasteButton.click();
    // * Code: "Hello from WebDriver"
    await this.inputForm.textInput("postform").setValue(testData.code);

    await this.inputForm.selectInput("syntax").isClickable();
    await this.inputForm.selectInput("syntax").click();
    await this.inputForm.selectInputOption(testData.syntax).isClickable();
    await this.inputForm.selectInputOption(testData.syntax).click();

    // * Paste Expiration: "10 Minutes"

    await this.inputForm.selectInput("expiration").isClickable();
    await this.inputForm.selectInput("expiration").click();

    await this.inputForm.selectInputOption(testData.expiration).isClickable();
    await this.inputForm.selectInputOption(testData.expiration).click();
    // * Paste Name / Title: "helloweb"
    await await this.inputForm.textInput("pastename").isClickable();
    await await this.inputForm
      .textInput("pastename")
      .setValue(testData.pasteName);
    // 3. Save paste
    await this.inputForm.submitButton.isClickable();
    await this.inputForm.submitButton.click();
  }
}

module.exports = IndexPage;
