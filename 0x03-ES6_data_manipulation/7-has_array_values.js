/**
 * Checks if the specified Set contains all the values from the provided array.
 *
 * @param {Set} set - The Set to evaluate
 * @param {Array} array - The array of values to verify against the Set
 * @return {boolean} True if all values from the array are present in the Set,
 * false otherwise
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
