const accounting = require('accounting');
const express = require('express');
const router = express.Router();

const Expense = require('../models/expense');

router.get('/', (req, res) => {

    Expense.find((err, result) => {
        if (err) {
            console.log("Unable to find expenses");
            res.redirect('back');
        } else {
            let expenses = result || [];

            console.log(expenses);

            res.render('expenses/index', {
                expenses
            });
        }
    })
});

router.get('/new', (req, res) => {
    res.render('expenses/new');
});

router.post('/', (req, res) => {
    
    let newExpense = req.body.expense;
    newExpense.amount = newExpense.amount ? accounting.unformat(newExpense.amount) : 0;

    Expense.create(newExpense, (err, created) => {
        if (err){
            console.log(err);
            res.redirect('back');
        } else {
            console.log(created);
            res.redirect('/expenses');
        }
    });
});

module.exports = router;