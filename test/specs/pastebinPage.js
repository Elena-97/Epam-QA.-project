class PastebinPage {
  get codeInput() { return $('#paste_code'); }
  get syntaxHighlightingDropdown() { return $('//*[@id="select2-postform-format-container"]'); }
  get syntaxOptionBash() { return $('//li[text()="Bash"]'); }
  get expirationDropdown() { return $('//*[@id="myform"]/div[3]/div[2]/div[2]/div[1]/div/span/span[1]/span/span[2]'); }
  get expirationOption10Minutes() { return $('//li[text()="10 Minutes"]'); }
  get nameInput() { return $('#postform-name'); }
  get createButton() { return $('//*[@id="myform"]/div[3]/div[6]/div[1]/input'); }

  open() {
      browser.url('https://pastebin.com/');
  }

  createNewPaste(code, syntax, expiration, name) {
      this.codeInput.setValue(code);
      this.syntaxHighlightingDropdown.click();
      this.syntaxOptionBash.click();
      this.expirationDropdown.click();
      this.expirationOption10Minutes.click();
      this.nameInput.setValue(name);
      this.createButton.click();
  }
}

module.exports = new PastebinPage();