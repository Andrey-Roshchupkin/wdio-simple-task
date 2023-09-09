const page = require("../page_objects");
const { testData_1 } = require("../test_data/data-layer");

describe("I can win!", () => {
  it("First test", async () => {
    // 1. Open https://pastebin.com or a similar service in any browser
    await page("index").open();
    await expect(browser).toHaveTitle(
      "Pastebin.com - #1 paste tool since 2002!"
    );
    // 2. Create a New Paste with the following details:
    // * Code: "Hello from WebDriver"
    // * Paste Expiration: "10 Minutes"
    // * Paste Name / Title: "helloweb"

    await page("index").createNewPasteAndSave(testData_1);

    await expect(browser).toHaveTitleContaining(testData_1.pasteName);
    await browser.pause(3000);
  });
});
