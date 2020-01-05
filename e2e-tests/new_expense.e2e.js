module.exports = {

    beforeEach : function (browser) {
        browser.url('http://localhost:3000/expenses/new')
        .waitForElementPresent('body');
    },

    'New Expense Form Test - has input for adding an expense' : (browser) => {
        browser
        .assert.visible('input[type=number]')
        .end();
    },

    'New Expense Form Test - has submit button' : (browser) => {
        browser
        .assert.visible('button[type=submit]')
        .end();
    }
};