const mongoose = require('mongoose');
const Expense = require('./models/expense');


const data = [
    {
        amount: "10.00",
        date: "11/3/2019"
    },
    {
        amount: "100.00",
        date: "11/6/2019"
    },
    {
        amount: "1000.00",
        date: "11/9/2019"
    },
];

function seedDB() {
    Expense.remove({}, function(err) {
        if (err){
            console.log(err);
        }
        console.log('Removed Expenses');

        data.forEach( seed => {
            Expense.create(seed, (err, exp) => {
                if (err){
                    console.log(err);
                } else {
                    console.log( 'Added expense: ' + exp.date + ' - ' + exp.amount );
                }
            })
        });
    })
}

module.exports = seedDB;