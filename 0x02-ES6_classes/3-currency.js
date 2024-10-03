export default class Currency {
  /**
   * Initializes a new instance of the Currency class.
   *
   * @param {string} code - The code for the currency.
   * @param {string} name - The name of the currency.
   *
   * Includes getters and setters for both properties.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
