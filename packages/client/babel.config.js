module.exports = {
    ignore: ['node_modules'],
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: [
                    'defaults',
                    'not ie > 0',
                    'not ie_mob > 0'
                ],
                modules: process.env.NODE_ENV === 'test' ? 'cjs' : false
            }
        ]
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
};
