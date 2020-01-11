const mongoose = require('mongoose');

const payeeSchema = mongoose.Schema({
    name: String
});

const Payee = mongoose.model('Payee', payeeSchema);
module.exports = Payee;