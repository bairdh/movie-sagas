const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const movie = require('./routes/movie.router');
const genre = require('./routes/genre.router');
const movieGenre = require('./routes/movie-genre.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movie', movie);
app.use('/genre', genre);
app.use('/movie-genre', movieGenre);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});