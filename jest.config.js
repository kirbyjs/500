// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>test/setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    verbose: true
};
