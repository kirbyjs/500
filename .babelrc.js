let babelExtends = './babel/client.js';

if (process.env.NODE_ENV === 'test') {
    babelExtends = './babel/node.js'
}

module.exports = {
    extends: babelExtends
};
