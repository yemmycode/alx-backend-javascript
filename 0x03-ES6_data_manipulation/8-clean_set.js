/**
 * Filters a Set by removing values that do not begin with the specified
 * string, and returns a string of the remaining values concatenated by '-'.
 *
 * For values that start with startString, only the remainder of the
 * string is included. The final string contains all qualifying values from
 * the set, separated by '-'.
 *
 * @param {Set} set - The Set to be cleaned
 * @param {string} startString - The string used to filter values
 * @return {string} A string of the remaining values joined by '-'
 */
export default function cleanSet(set, startString) {
  // Array to hold the filtered values
  const parts = [];
  // Return an empty string if any parameters are invalid
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    // Verify that the value is a string and begins with the specified string
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Get the substring following startString
      const valueSubStr = value.substring(startString.length);

      // Add the substring to the parts array if it is not empty and not
      // equal to the original value
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
