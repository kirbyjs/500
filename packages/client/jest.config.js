// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('../../jest.config.base.js');

module.exports = {
    ...base,
    setupFilesAfterEnv: ['<rootDir>test/setup.ts'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '\\.(css|scss)$': '<rootDir>test/__mocks__/style-mock.ts',
        '\\.(svg)$': '<rootDir>test/__mocks__/file-mock.ts'
    }
};
