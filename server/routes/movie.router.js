const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    let query = `
    SELECT * 
    FROM movies
    ORDER BY id
    LIMIT 10;`
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
    SELECT m.id, m.title, m.poster, m.description, g.name, g.id AS genre_id
    FROM movies AS m
    JOIN movie_genre AS mg
        ON m.id = mg.movies_id
    JOIN genres AS g
        ON mg.genres_id = g.id
    WHERE m.id = $1;`

    pool.query(query, [id]).then(result =>{
        // console.log(result.rows);
        
        res.send(result.rows)
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
    })
})

router.put('/update', (req, res) =>{
    let id = req.body.id;
    let title = req.body.title;
    let des =req.body.description;
    const query = `
    UPDATE movies
    SET title = $1,
    description = $2
    WHERE id = $3;`;
    console.log(id, title, des);
    pool.query(query, [title, des, id]).then(result => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })

})

router.get('/search/:search', (req, res) =>{
    let search = req.params.search
    let query = `
    SELECT * 
    FROM movies
    WHERE LOWER(title) = LOWER($1)
    LIMIT 10;`

    pool.query(query, [search]).then(result =>{
        res.send(result.rows)
    }).catch(err =>{
        console.log(err);
        res.sendStatus(500);
        
    })
})

module.exports = router;