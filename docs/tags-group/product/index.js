const addProduct = require('./add-product');
const updateProduct = require('./update-product');
const viewProduct = require('./view-product');
const getProduct = require('./get-product');
const deleteProduct = require('./delete-product');
const updateProductStatus = require('./update-product-status');

module.exports = {
    '/product/add': {
        ...addProduct
    },
    '/product/view': {
        ...viewProduct
    },
    '/product/update': {
        ...updateProduct
    },
    '/product/getById/{id}': {
        ...getProduct
    },
    '/product/updateStatus': {
        ...updateProductStatus
    },
    '/product/delete/{id}': {
        ...deleteProduct
    },
}