export const weakMap = new WeakMap();

/**
 * The maximum allowable calls for a given endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Queries the API using the specified endpoint and tracks the number
 * of times the endpoint has been accessed.
 *
 * @param {string} endpoint - The endpoint to access
 */
export function queryAPI(endpoint) {
  // If the endpoint has not been accessed previously, initialize its value in the
  // weakMap to 0
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Update the count of how many times the endpoint has been accessed
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // If the endpoint has been accessed too frequently, throw an error
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
