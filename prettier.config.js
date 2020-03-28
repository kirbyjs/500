module.exports = {
    jsxSingleQuote: true,
    printWidth: 120,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2
            }
        },
        {
            files: '*.scss',
            options: {
                tabWidth: 2
            }
        }
    ]
};
