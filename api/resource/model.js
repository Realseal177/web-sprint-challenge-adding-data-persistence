// build your `Resource` model here
const db = require('../../data/dbConfig.js');

async function findAll() {
    const resources = await db('resources');
    return resources;
  }

module.exports = {
    findAll,
}