module.exports = {
    moduleDirectories: [
        'node_modules',
        '<rootDir>'
    ],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!shared)'
    ],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    verbose: true
};
