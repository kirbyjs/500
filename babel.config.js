module.exports = {
    ignore: ['node_modules/(?!shared)'],
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/preset-env',
            {
                targets: { node: 'current' }
            }
        ]
    ]
};
