const users = require('./users');
const category = require('./category');
const dashboard = require('./dashboard');
const product = require('./product');

module.exports = {
    paths: {
        ...users,
        ...category,
        ...dashboard,
        ...product
    }
}