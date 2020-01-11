const express = require('express');
const router = express.Router();

const Payee = require('../models/payee');

router.get('/', (req, res) => {
    Payee.find((err, result) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            let payees = result || [];

            console.log(payees);

            res.render('payees/index', {
                payees
            });
        }
    });
});

router.get('/new', (req, res) => {
    res.render('payees/new');
});

router.post('/', (req, res) => {
    Payee.create(req.body.payee, (err, created) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            console.log(created);
            res.redirect('/wheres');
        }
    });
});

module.exports = router;