/**
 * Function that rounds two numbers and performs different operations based on the type.
 * @param {string} type - The operation type: 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation, or 'Error' if division by zero occurs.
 */
function calculateNumber(type, a, b) {
    // Check if the operation is 'SUM'
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }

    // Check if the operation is 'SUBTRACT'
    if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }

    // Check if the operation is 'DIVIDE'
    if (type === 'DIVIDE') {
        // Avoid division by zero
        return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }

    // Return 0 if the type is not recognized
    return 0;
}

module.exports = calculateNumber;

