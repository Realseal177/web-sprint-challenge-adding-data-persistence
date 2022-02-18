// build your `Resource` model here
const db = require('../../data/dbConfig.js');

function findAll() {
    return db('resources');
  }

async function post(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return findAll().where({ resource_id }).first();
}

module.exports = {
    findAll,
    post
}