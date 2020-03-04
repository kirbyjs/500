
jest.mock('src/initialize');
import initialize from 'src/initialize';
import App from 'src/app';
import 'src';

describe('App Entry', () => {
    afterEach(() => jest.clearAllMocks());

    it('should initialize app', () => {
        expect(initialize).toHaveBeenCalledTimes(1);
        expect(initialize).toHaveBeenCalledWith(App);
    });
});
