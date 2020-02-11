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
                modules: false
            }
        ]
    ]
};
