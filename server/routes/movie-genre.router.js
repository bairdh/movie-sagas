const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) =>{
    let genre_id = req.body.genre_id;
    let movie_id = req.body.movie_id;
    let query = `
    INSERT INTO movie_genre (movies_id, genres_id)
    VALUES($1, $2);`;

    pool.query(query, [movie_id, genre_id]).then(results =>{
        console.log(`movie & id:`, movie_id, genre_id);
        
        res.sendStatus(201);
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;