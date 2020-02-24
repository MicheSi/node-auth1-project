const db = require('../data/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    add
};

function find() {
    return db('users')
        .select('id', 'username', 'password');
}

function findBy(username) {
    return db('users')
        .select('id', 'username', 'password')
        .where(username);
}

function findById(id) {
    return db('users')
        .select('id', 'username')
        .where({id})
        .first();
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            return findById(ids)
        })
}