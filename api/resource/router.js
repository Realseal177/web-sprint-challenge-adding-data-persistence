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
})

module.exports = router;