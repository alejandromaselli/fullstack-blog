const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')

const app = express();

const { config, engine } = require('express-edge');

const mongoose = require('mongoose');

app.use(express.static('public'));

app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

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
    //res.sendFile(path.resolve(__dirname, 'pages/post.html'))
    res.render('post')
});

app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    res.render('contact')
});

app.get('/posts/new', (req, res) => {
    res.render('create')
});

app.post('/posts/store', (req, res) => {
    
    console.log(req.body);
    
    res.redirect('/');
});

/*=====  End of Routes  ======*/

app.listen(3001, () => {
    console.log("Server Running");
});

/*===========================================
=            Mongoose connection            =
===========================================*/

mongoose.connect('mongodb://localhost:3000/node-js-blog', {useNewUrlParser: true, useUnifiedTopology: true},(err, obj) => {
    console.log("Conexion exitosa");
});

/*=====  End of Mongoose connection  ======*/

//console.log("end of file");



