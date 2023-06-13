const textToEnter = `git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

git push origin master --force`;

describe("Bring It On", () => {
  it("Second test", async () => {
    // 1. Open https://pastebin.com or a similar service in any browser
    await browser.url("https://pastebin.com/");
    // 2. Create a New Paste with the following details:
    await $("a.header__btn").click();
    // * Code:
    // git config --global user.name "New Sheriff in Town"

    // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

    // git push origin master --force
    await $("textarea#postform-text").setValue(textToEnter);
    // * Syntax Highlighting: "Bash"
    await browser.scroll(0, 600);  
    await $("span#select2-postform-format-container").click();
    await $("li=Bash").click();
    // * Paste Expiration: "10 Minutes"
    await $("span#select2-postform-expiration-container").click();
    await $("li=10 Minutes").click();
    // * Paste Name / Title: "how to gain dominance among developers"
    await $("input#postform-name").setValue(
      "how to gain dominance among developers"
    );
    // 3. Save paste
    await browser.scroll(0, 300); 
    await $("button=Create New Paste").click();
    await browser.pause(1000)
  });
  //   and check the following:
  it("Browser page title matches Paste Name / Title", async () => {
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual(
      "how to gain dominance among developers - Pastebin.com"
    );
  });
  it("Syntax is suspended for bash", async () => {
    const isBash = await $("a=Bash").isDisplayed();
    expect(isBash).toEqual(true);
  });
  it("Check that the code matches the one entered", async () => {
    //   Easy, but not very right way:
    // await $("a=raw").click();
    // const enteredText = await $("pre").getText();
    // expect(enteredText).toEqual(textToEnter);

    // Seems to be right:
    let displayedPaste = "";
    const elementsWithPaste = await $$(".de1");
    for (idx = 0; idx < elementsWithPaste.length; idx++) {
      let stringToAdd = await elementsWithPaste[idx].getText();
      if (stringToAdd === " ") stringToAdd = "";
      displayedPaste += stringToAdd;
      if (idx != elementsWithPaste.length - 1) displayedPaste += "\n";
    }
    expect(displayedPaste).toEqual(textToEnter);
  });
});
