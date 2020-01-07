module.exports = {

    'First Test - contains "Made it"' : (browser) => {
        browser
        .url('http://localhost:3000/')
        .assert.containsText('h1', 'MADE IT');
    }
};