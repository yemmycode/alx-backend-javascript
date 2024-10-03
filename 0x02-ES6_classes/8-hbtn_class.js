export default class HolbertonClass {
  /**
   * Initializes a new instance of HolbertonClass.
   * @param {number} size - The number of students in the class.
   * @param {string} location - The geographical location of the class.
   */
  constructor(size, location) {
    this.size = size; 
    this.location = location; 
  }

  get size() {
    // Retrieves the number of students in the class
    return this._size;
  }

  set size(value) {
    // Assigns a new value to the number of students
    this._size = value;
  }

  get location() {
    // Retrieves the location of the class
    return this._location;
  }

  set location(value) {
    // Assigns a new value to the class location
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    // Custom method to handle type conversion
    if (hint === 'number') {
      return this.size; 
    }
    if (hint === 'string') {
      return this.location; 
    }
    return this; 
  }
}
