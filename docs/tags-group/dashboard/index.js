const cateCount = require('./cate-count');
const productCount = require('./product-count');

module.exports = {
    '/dashboard/cateCount': {
        ...cateCount
    },
    '/dashboard/productCount': {
        ...productCount
    },
}