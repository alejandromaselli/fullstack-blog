const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const { config, engine } = require('express-edge');

const mongoose = require('mongoose');

app.use(express.static('public'));

app.use(engine);

app.set('views', `${__dirname}/views`);

/*==============================
=            Routes            =
==============================*/

app.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index')
});

app.get('/about', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'pages/about.html'))
    res.render('about')
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'))
});

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
});

/*=====  End of Routes  ======*/

app.listen(3001, () => {
    console.log("Server Running");
});

/*===========================================
=            Mongoose connection            =
===========================================*/

mongoose.connect('mongodb://localhost:3000/node-js-blog', {useNewUrlParser: true, useUnifiedTopology: true},(err, obj) => {
    console.log(err, obj);
});

/*=====  End of Mongoose connection  ======*/

//console.log("end of file");



