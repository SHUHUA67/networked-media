const express = require('express');
const nunjucks = require("nunjucks");
const fs = require('fs');
const app = express(); 

app.use(express.static('public'));
//read information
app.use(express.urlencoded({ extended: true }));

//nunjucks setup
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

//stored songs setup
let allSongs = [];

//homepage
app.get('/', (request, response) => {
    response.render('index', { songs: allSongs });
});

//new song input
app.post('/add-song', (request, response) => {
    allSongs.push(request.body);
    //homepage go back
    response.redirect('/');
});

app.listen(5005, () => {
    console.log('http://localhost:5005');
});