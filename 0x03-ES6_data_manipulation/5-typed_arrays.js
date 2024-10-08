/**
 * Initializes a new Int8Array with a specified length, sets a value at 
 * a given position, and returns a DataView of that array.
 *
 * An error "Position outside range" should be thrown if the position is invalid.
 *
 * @param {number} length - The desired length of the new array
 * @param {number} position - The index where the value should be set
 * @param {number} value - The value to be assigned at the specified index
 * @return {DataView} A DataView representation of the newly created array
 */
export default function createInt8TypedArray(length, position, value) {
  // Validate if the position is within the bounds of the array
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // Generate a DataView for the array and set the value
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
