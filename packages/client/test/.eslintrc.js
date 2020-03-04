const path = require('path');

module.exports = {
    settings: {
        'import/resolver': {
            node: {
                paths: [path.join(__dirname, '..')],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    rules: {
        'one-var': 'off',
        'import/first': 'off',
        'import/prefer-default-export': 'off'
    }
};
