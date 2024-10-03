import Currency from './3-currency';

export default class Pricing {
  /**
   * Represents the pricing details for a specific amount of money in a given currency.
   * @param {number} amount - The monetary value.
   * @param {string} currency - The currency associated with the amount.
   *
   * This class includes getters and setters for both amount and currency properties.
   */
  constructor(amount, currency) {
    this.amount = amount; // Set the initial amount using the setter
    this.currency = currency; // Set the initial currency using the setter
  }

  get amount() {
    // Getter for the amount property
    return this._amount;
  }

  set amount(value) {
    // Setter for the amount property
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number'); // Validate that the value is a number
    }
    this._amount = value; // Store the valid amount
  }

  get currency() {
    // Getter for the currency property
    return this._currency;
  }

  set currency(value) {
    // Setter for the currency property
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency'); // Ensure the value is a Currency instance
    }
    this._currency = value; // Store the valid currency
  }

  /**
   * Displays the full price including the amount and currency details.
   * @returns {string} The formatted price string.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`; // Format the price with currency name and code
  }

  /**
   * Converts a given amount of money to another currency based on a conversion rate.
   * @param {number} amount - The amount to be converted.
   * @param {number} conversionRate - The rate used for conversion.
   * @returns {number} The converted amount.
   * @throws {TypeError} If amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number'); // Validate that the amount is a number
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number'); // Validate that the conversionRate is a number
    }
    return amount * conversionRate; // Return the converted amount
  }
}

