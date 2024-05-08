describe("task2", () => {
  it("tests task2", async () => {
    await browser.setWindowSize(958, 728)
    await browser.url("https://pastebin.com/")
    await expect(browser).toHaveUrl("https://pastebin.com/")
    await browser.$("#postform-text").click()
    await browser.$("#postform-text").setValue("git config --global user.name  \"New Sheriff in Town\"\ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\ngit push origin master --force\n")
    await browser.$("#select2-postform-format-container").click()
    await browser.$("/html/body/span[2]/span/span[1]/input").setValue("bash")
    await browser.$("#select2-postform-expiration-container").click()
    await browser.$("#select2-postform-status-container").click()
    await browser.$("#postform-name").click()
    await browser.$("#postform-name").setValue("how to gain dominance among developers")
    await browser.$("aria/Create New Paste").click()
    await expect(browser).toHaveUrl("https://pastebin.com/")
    await browser.$("aria/AGREE").click()
  });
});
