/**
 * Represents a Car with specific attributes and functionality.
 * 
 * @class Car
 * @param {string} brand - The brand of the car.
 * @param {string} motor - The motor type of the car.
 * @param {string} color - The color of the car.
 * 
 * This class provides:
 * - Getters and setters for the brand, motor, and color properties.
 * - A static method to define the species of the car, allowing for cloning.
 * - A method to clone the car instance using the species constructor.
 */
export default class Car {
  /**
   * Initializes a new instance of the Car class.
   * 
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor type of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this.brand = brand; 
    this.motor = motor; 
    this.color = color; 
  }

  get brand() {
    // Getter for the brand property
    return this._brand;
  }

  set brand(value) {
    // Setter for the brand property
    this._brand = value; 
  }

  get motor() {
    // Getter for the motor property
    return this._motor;
  }

  set motor(value) {
    // Setter for the motor property
    this._motor = value; 
  }

  get color() {
    // Getter for the color property
    return this._color;
  }

  set color(value) {
    // Setter for the color property
    this._color = value; 
  }

  /**
   * Static accessor for the species of the Car class.
   * 
   * This allows the creation of subclasses to specify their 
   * own behavior when cloning.
   * 
   * @returns {function} The constructor function for the species.
   */
  static get [Symbol.species]() {
    return this; // Return the constructor of the class
  }

  /**
   * Clones the current Car instance using the species constructor.
   * 
   * @returns {Car} A new instance of the Car class.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species]; 
    return new Species(); // Create a new instance of the species
  }
}

