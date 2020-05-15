const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    let query = `SELECT * FROM movies`
    pool.query(query).then(result => {
        console.log(`In movie GET:`, result.data);
        res.send(result.data);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})



module.exports = router;