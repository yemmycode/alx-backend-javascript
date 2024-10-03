export default class Airport {
  /**
   * Represents an airport with a specific name and code.
   * @param {string} name - The name of the airport.
   * @param {string} code - The airport code.
   *
   * This class includes appropriate getters and setters.
   */
  constructor(name, code) {
    this.name = name; 
    this.code = code; 
  }

  get name() {
    // Retrieve the airport's name
    return this._name;
  }

  set name(value) {
    // Set the airport's name
    this._name = value;
  }

  get code() {
    // Retrieve the airport's code
    return this._code;
  }

  set code(value) {
    // Set the airport's code
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    // Define the string representation of the airport as its code
    return this._code;
  }
}

