/**
 * Function that rounds two numbers and returns their sum.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the rounded numbers.
 */
function calculateNumber(a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    return roundedA + roundedB;
}

module.exports = calculateNumber;
