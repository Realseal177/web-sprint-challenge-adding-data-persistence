// build your `/api/resources` router here
const express = require('express');
const router = express.Router();

const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.findAll()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Resources.post(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(next)
});

module.exports = router;