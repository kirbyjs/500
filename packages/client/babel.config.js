let presetEnvOptions = {
    targets: ['defaults', 'not ie > 0', 'not ie_mob > 0'],
    modules: false
};

if (process.env.NODE_ENV === 'test') {
    presetEnvOptions = {
        targets: { node: 'current' }
    };
}

module.exports = {
    ...require('../../babel.config'), // eslint-disable-line global-require
    presets: ['@babel/preset-typescript', '@babel/preset-react', ['@babel/preset-env', presetEnvOptions]],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
};
