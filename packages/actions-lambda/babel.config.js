const plugins = [];

if (process.env.NODE_ENV !== 'test') {
    plugins.push([
        'module-resolver',
        {
            alias: {
                shared: './lib/shared'
            }
        }
    ]);
}

module.exports = {
    extends: '../../babel.config',
    plugins
};
