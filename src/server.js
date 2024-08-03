const express = require('express');
const path = require('path');
// inicializaciones
const app = express();

//setings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


// middlewares
app.use(express.urlencoded({extended: false}));

// Global variables

// Routes
app.get('/', (req, res) => {
    res.send('Bienvenido a un mundo diversion');
});

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;