const express = require('express');
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');

const dotenv = require('dotenv');
dotenv.config();

const expenseRoutes = require('./routes/expense');

app.locals.accounting = require('accounting');

app.set('view engine', 'ejs');
app.use(
    bp.urlencoded({
        extended: true
    })
);

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));


const PORT = process.env.PORT || 3000;

const dbUri =
    'mongodb+srv://' +
    process.env.MONGOATLAS_DB_USER +
    ':' +
    encodeURIComponent(process.env.MONGOATLAS_DB_PW) +
    '@' +
    process.env.MONGOATLAS_DB_SRV +
    '.mongodb.net/' +
    process.env.MONGOATLAS_DB_APPNAME +
    '?retryWrites=true&w=majority';

mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('Connected to DB!');
    })
    .catch(err => {
        console.log('ERROR:', err.message);
    });


app.get('/', (req,res) => {
    res.render('index');
});

app.use('/expenses', expenseRoutes);

app.listen(PORT, () => {
    console.log('Spending-It Server has started on port ' + PORT);
});
