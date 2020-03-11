module.exports = {
    moduleDirectories: ['node_modules', '<rootDir>'],
    coveragePathIgnorePatterns: ['node_modules', 'config', 'test'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!shared)'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    verbose: true
};
