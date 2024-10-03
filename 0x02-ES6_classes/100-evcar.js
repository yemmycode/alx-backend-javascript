/* 
 * EVCar Class Definition
 * This class represents an electric vehicle (EV) that extends the Car class.
 * It includes properties for brand, motor, color, and range, along with
 * a method to clone the car instance.
 */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range; 
  }

  get range() {
    // Getter for the range property
    return this._range;
  }

  set range(value) {
    // Setter for the range property
    this._range = value; // Store the valid range
  }

  cloneCar() {
    // Method to clone the car instance using the species constructor
    const Species = super.constructor[Symbol.species];
    return new Species(); // Return a new instance of the car species
  }
}
