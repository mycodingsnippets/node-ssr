const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const handlebars = require('express-handlebars');

const landingRoute = require('./routes/landing');
const accountRoute = require('./routes/account');

require('dotenv').config();

const app = express();
const port = 90;

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts/',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials/'
}));
app.use(express.static('public'));
app.use(bodyParser.json());

app.use("/", landingRoute);
app.use("/", accountRoute);

app.listen(port, () => {
    console.log('App running');
});