const addCategory = require('./add-category');
const updateCategory = require('./update-category');
const viewCategory = require('./view-category');

module.exports = {
    '/category/add': {
        ...addCategory
    },
    '/category/view': {
        ...viewCategory
    },
    '/category/update': {
        ...updateCategory
    },
}