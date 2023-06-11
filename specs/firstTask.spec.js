describe("I can win!", () => {
  it("First test", async () => {
    // 1. Open https://pastebin.com or a similar service in any browser
    await browser.url("https://pastebin.com/");
    // 2. Create a New Paste with the following details:
    await $("a.header__btn").click();
    // * Code: "Hello from WebDriver"
    await $("textarea#postform-text").setValue("Hello from WebDriver");
    // * Paste Expiration: "10 Minutes"
    await $("span#select2-postform-expiration-container").click();
    await $("li=10 Minutes").click();
    // * Paste Name / Title: "helloweb"
    await $("input#postform-name").setValue("helloweb");
  });
});
