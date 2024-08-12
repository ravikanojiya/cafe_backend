const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const tagsGroup = require('./tags-group');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...tagsGroup
}