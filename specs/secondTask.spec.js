const page = require("../page_objects");
const { testData_2 } = require("../test_data/data-layer");

describe("Bring It On", () => {
  it("Second test", async () => {
    // 1. Open https://pastebin.com or a similar service in any browser
    await page("index").open();
    await expect(browser).toHaveTitle(
      "Pastebin.com - #1 paste tool since 2002!"
    );
    //     2. Create a New Paste with the following details:
    // * Code:
    // git config --global user.name "New Sheriff in Town"
    // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
    // git push origin master --force
    // * Syntax Highlighting: "Bash"
    // * Paste Expiration: "10 Minutes"
    // * Paste Name / Title: "how to gain dominance among developers"

    await page("index").createNewPasteAndSave(testData_2);
  });

  //   and check the following:
  it("Browser page title matches Paste Name / Title", async () => {
    await expect(browser).toHaveTitleContaining(testData_2.pasteName);
  });
  it("Syntax is suspended for bash", async () => {
    await expect(
      await page("paste").content.isSyntax(testData_2.syntax)
    ).toEqual(true);
  });
  it("Check that the code matches the one entered", async () => {
    expect(await page("paste").content.pasteText()).toEqual(testData_2.code);
    await browser.pause(3000);
  });
});
