const practice = require('./example');

describe('practice', () => {
    it('should exist', () => {
        expect(practice).toBeDefined();
    });

    it('should be a function', () => {
        expect(typeof practice).toBe('function');
    });

    it('should return a string', () => {
        const result = practice();

        expect(result).toBe('Test')
    });
});