'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
module.exports = router;

router.get('/s*', (req, res, next) => {
    // res.json(tickets);
    console.log('req.url', req.url);


    fs.readFile(path.resolve(__dirname, 'app/ws' + req.url), 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);

        const json = JSON.parse(data);
        const delay = json.delay;

        setTimeout(() => {
            res.json(json);
        }, delay);
    });
});