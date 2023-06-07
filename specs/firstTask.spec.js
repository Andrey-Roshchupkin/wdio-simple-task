describe("I can win!", () => {
  it("First test", async () => {
    // 1. Open https://pastebin.com or a similar service in any browser
    await browser.url("https://pastebin.com/");
    // 2. Create a New Paste with the following details:
    // * Code: "Hello from WebDriver"
    await $("textarea#postform-text").setValue("Hello from WebDriver");
    // * Paste Expiration: "10 Minutes"
    await $('span[data-select2-id="3"]').click();
    await $("li=10 Minutes").click();
    // * Paste Name / Title: "helloweb"
    await $("input#postform-name").setValue("helloweb");
  });
});
