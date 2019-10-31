module.exports = {
    ignore: ['node_modules'],
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: { node: 'current' }
            }
        ]
    ]
};
