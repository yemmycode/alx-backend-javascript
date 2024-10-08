/**
 * Modifies the quantities of unique items in a Map.
 *
 * For each entry in the map where the quantity equals 1, change the
 * quantity to 100.
 *
 * @param {Map} map - The Map to be modified
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((quantity, item) => {
    // If the quantity is 1, change it to 100
    if (quantity === 1) {
      map.set(item, 100);
    }
  });
}
