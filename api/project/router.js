// build your `/api/projects` router here
const express = require('express');
const router = express.Router();

const Projects = require('./model')


router.get('/', (req, res, next) => {
    Projects.findAll()
        .then(project => {
            res.json(project)
        })
        .catch(next)
})


module.exports = router;