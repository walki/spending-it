const express = require('express');
const router = express.Router();

const Category = require('../models/category');

router.get('/', (req, res) => {
    Category.find((err, result) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            let categories = result || [];

            console.log(categories);

            res.render('categories/index', {
                categories
            });
        }
    });
});

router.get('/new', (req, res) => {
    res.render('categories/new');
});

router.post('/', (req, res) => {
    Category.create(req.body.category, (err, created) => {
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            console.log(created);
            res.redirect('/whats');
        }
    });
});

module.exports = router;
