const createUser = require('./create-user');
const loginUser = require('./login-user');
const forgotPwd = require('./forgot-password');
const getUsers = require('./get-users');
const updateUser = require('./update-user-status');
const checkToken = require('./check-token');
const changePwd = require('./change-password');

module.exports = {
    '/user/signup': {
        ...createUser
    },
    '/user/login': {
        ...loginUser
    },
    '/user/forgotpassword': {
        ...forgotPwd
    },
    '/user/getAll': {
        ...getUsers
    },
    '/user/update': {
        ...updateUser
    },
    '/user/checktoken': {
        ...checkToken
    },
    '/user/changePassword': {
        ...changePwd
    }
}