const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    amount: Number,
    date: Date,
    payee: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payee'
        }
    },
    category: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        }
    }
});

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;