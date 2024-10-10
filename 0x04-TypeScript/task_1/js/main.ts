
/**
 * Teacher interface that defines the structure of a teacher object.
 * Includes the first and last name, employment status, optional years of experience, 
 * location, and additional properties as needed.
 */
export interface Teacher {
  readonly firstName: string;     
  readonly lastName: string;      
  fullTimeEmployee: boolean;     
  yearsOfExperience?: number;     
  location: string;              
  [index: string]: any;          
}

/**
 * Director interface extending Teacher. 
 * Adds a number of reports managed by the director.
 */
export interface Director extends Teacher {
  numberOfReport: number;         // Number of reports managed by the director
}

/**
 * Interface for the printTeacher function signature. 
 * It accepts a first name and last name and returns a string.
 */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Function that takes a teacher's first and last name and returns a formatted string.
 * Displays the first letter of the first name followed by the last name.
 * @param firstName - The teacher's first name
 * @param lastName - The teacher's last name
 * @returns A string in the format 'F. Lastname'
 */
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

/**
 * Interface for the StudentClass constructor. 
 * Specifies that a class implementing this interface should accept 
 * a first and last name and return an instance of IStudentClass.
 */
export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

/**
 * Interface that defines the structure for a student class object.
 * Contains methods for working on homework and displaying the student's name.
 */
export interface IStudentClass {
  workOnHomework(): string;       
  displayName(): string;          
}

/**
 * StudentClass implementation of the IStudentClass interface. 
 * Represents a student with a first and last name.
 */
export class StudentClass implements IStudentClass {
  private _firstName!: string;    
  private _lastName!: string;     

  /**
   * Constructor for the StudentClass.
   * Initializes the student's first and last name.
   * @param firstName - The student's first name
   * @param lastName - The student's last name
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * Method that returns a string indicating the student is currently working on homework.
   * @returns A string 'Currently working'
   */
  workOnHomework(): string {
    return 'Currently working';
  }

  /**
   * Method that returns the student's first name.
   * @returns The student's first name
   */
  displayName(): string {
    return this._firstName;
  }
}
