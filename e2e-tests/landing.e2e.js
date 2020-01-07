module.exports = {

    'Landing Page - title contains "Spending It"' : (browser) => {
        browser
        .url('http://localhost:3000/')
        .getTitle()
        .assert.title('Spending It')
        
    },

    'Landing Page - contains "Spending It"' : (browser) => {
        browser
        .url('http://localhost:3000/')
        .assert.containsText('h1', 'Spending It');
    },


};