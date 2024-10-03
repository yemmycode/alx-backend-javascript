export default class Building {
  /**
   * Initializes a new Building instance.
   * @param {number} sqft - The square footage of the building.
   *
   * This class implements a getter and setter for the sqft property.
   */
  constructor(sqft) {
    this.sqft = sqft; 
    // Check if the current class is not Building
    if (this.constructor !== Building) {
      // Ensure that the extending class implements the evacuationWarningMessage method
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage', 
        );
      }
    }
  }

  get sqft() {
    // Getter for the square footage
    return this._sqft;
  }

  set sqft(value) {
    // Setter for the square footage
    this._sqft = value; // Assign the new square footage value
  }
}
