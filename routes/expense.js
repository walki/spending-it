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
            res.render('expenses/index', {
                expenses
            });
        }
    })
});

router.get('/new', (req, res) => {
    res.render('expenses/new');
});

module.exports = router;