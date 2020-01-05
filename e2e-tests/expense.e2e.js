module.exports = {
    beforeEach : function (browser) {
        browser.url('http://localhost:3000/expenses/')
        .waitForElementPresent('body');
    },

    'Expense Test - Has list' : (browser) => {
        browser
        .assert.visible('ul')
        .end();
    }
};