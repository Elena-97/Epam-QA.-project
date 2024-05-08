const assert = require('assert');
const PastebinPage = require('./pastebinPage');

describe("task2", () => {
  it("tests task2", async () => {

        PastebinPage.createNewPaste(
            'git config --global user.name  "New Sheriff in Town"\n' +
            'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
            'git push origin master --force',
            'Bash',
            '10 Minutes',
            'how to gain dominance among developers'
        );

        assert.strictEqual(browser.getTitle(), 'how to gain dominance among developers');
        const codeText = PastebinPage.codeInput.getValue();
        assert.strictEqual(codeText, 'git config --global user.name  "New Sheriff in Town"\n' +
            'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n' +
            'git push origin master --force');
    });
});

