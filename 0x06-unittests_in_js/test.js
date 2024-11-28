const assert = require('assert');

describe('Sample Test', () => {
    it('should return -1 when the value is not present in the array', () => {
        assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });

    it('should return the index of the value if present', () => {
        assert.strictEqual([1, 2, 3].indexOf(2), 1);
    });
});

