describe("PasteBin", () => {
  it("tests PasteBin", async () => {
    await browser.setWindowSize(958, 729)
    await browser.url("https://pastebin.com/")
    await expect(browser).toHaveUrl("https://pastebin.com/")
    await browser.$("#postform-text").click()
    await browser.$("#postform-text").setValue("Hello from Webdriver")
    await browser.$("#select2-postform-expiration-container").click()
    await browser.$("#postform-name").click()
    await browser.$("#postform-name").setValue("helloweb")
    await browser.$("aria/Create New Paste").click()
    await expect(browser).toHaveUrl("https://pastebin.com/ANwZZvVb")
    await browser.$("aria/AGREE").click()
    await browser.$("aria/helloweb").isVisible()
  });
});
