const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    let query = `SELECT * FROM movies`
    pool.query(query).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

router.get(`/:id`, (req, res) => {
    let id = req.params.id
    let query = `
    SELECT m.id, m.title, m.poster, m.description, g.name
    FROM movies AS m
    JOIN movie_genre AS mg
        ON m.id = mg.movies_id
    JOIN genres AS g
        ON mg.genres_id = g.id
    WHERE m.id = $1;`

    pool.query(query, [id]).then(result =>{
        console.log(result.rows);
        
        res.send(result.rows)
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    })
})



module.exports = router;