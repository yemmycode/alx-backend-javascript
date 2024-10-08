/**
 * Generates a Map containing grocery items and their respective quantities.
 *
 * @return {Map} A Map with groceries and their quantities
 */
export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(items);
}
