module.exports = {

    beforeEach : function (browser) {
        browser.url('http://localhost:3000/expense')
        .waitForElementPresent('body');
    },

    'Expense Test - has input for adding an expense' : (browser) => {
        browser
        .assert.visible('input[type=number]')
        .end();
    },

    'Expense Test - has submit button' : (browser) => {
        browser
        .assert.visible('button[type=submit]')
        .end();
    }
};