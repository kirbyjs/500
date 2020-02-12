// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>test/setup.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleDirectories: ['node_modules', '.'],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>test/__mocks__/style-mock.ts',
        '\\.(svg)$': '<rootDir>test/__mocks__/file-mock.ts'
    },
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    verbose: true
};
