import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
   * Represents a skyscraper with a given square footage and number of floors.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The total number of floors in the building.
   *
   * This class includes getters and setters for the floors property.
   */
  constructor(sqft, floors) {
    super(sqft); 
    this.floors = floors; 
  }

  get floors() {
    // Getter for the floors property
    return this._floors; // Return the number of floors
  }

  set floors(value) {
    // Setter for the floors property
    this._floors = value; // Store the valid number of floors
  }

  /**
   * Generates an evacuation warning message for the building.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`; 
  }
}
