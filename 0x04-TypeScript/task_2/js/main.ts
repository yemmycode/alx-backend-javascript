/**
 * DirectorInterface defines the methods a Director should implement.
 * Includes methods for working from home, getting a coffee break, 
 * and performing director-specific tasks.
 */
export interface DirectorInterface {
  workFromHome(): string;       // Method to indicate if the director works from home
  getCoffeeBreak(): string;     // Method to indicate if the director gets a coffee break
  workDirectorTasks(): string;  // Method to specify tasks specific to a director
}

/**
 * TeacherInterface defines the methods a Teacher should implement.
 * Includes methods for working from home, getting a coffee break, 
 * and performing teacher-specific tasks.
 */
export interface TeacherInterface {
  workFromHome(): string;       // Method to indicate if the teacher works from home
  getCoffeeBreak(): string;     // Method to indicate if the teacher gets a coffee break
  workTeacherTasks(): string;   // Method to specify tasks specific to a teacher
}

/**
 * Director class implements the DirectorInterface.
 * It defines the behavior of a Director regarding working from home, 
 * taking a coffee break, and performing director tasks.
 */
export class Director implements DirectorInterface {
  /**
   * Director working from home.
   * @returns A string indicating the director works from home
   */
  workFromHome() {
    return 'Working from home';
  }

  /**
   * Director getting a coffee break.
   * @returns A string indicating the director is taking a coffee break
   */
  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  /**
   * Director performing director-specific tasks.
   * @returns A string indicating the director is performing their tasks
   */
  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

/**
 * Teacher class implements the TeacherInterface.
 * It defines the behavior of a Teacher regarding working from home, 
 * taking a coffee break, and performing teacher tasks.
 */
export class Teacher implements TeacherInterface {
  /**
   * Teacher cannot work from home.
   * @returns A string indicating the teacher cannot work from home
   */
  workFromHome() {
    return 'Cannot work from home';
  }

  /**
   * Teacher cannot have a coffee break.
   * @returns A string indicating the teacher cannot take a coffee break
   */
  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  /**
   * Teacher performing teacher-specific tasks.
   * @returns A string indicating the teacher is performing their tasks
   */
  workTeacherTasks() {
    return 'Getting to work';
  }
}

/**
 * Function to create an employee (either a Director or a Teacher) based on the salary provided.
 * If salary is a number and less than 500, a Teacher is created. Otherwise, a Director is created.
 * @param salary - The salary of the employee (number or string)
 * @returns An instance of Director or Teacher
 */
export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

/**
 * Function to check if an employee is a Director.
 * @param employee - The employee instance (Director or Teacher)
 * @returns A boolean indicating whether the employee is a Director
 */
export function isDirector(employee: (Director | Teacher)): boolean {
  return employee instanceof Director;
}

/**
   * Function to execute the correct task based on the employee's role.
   * If the employee is a Director, it performs director tasks.
   * Otherwise, it performs teacher tasks.
   * @param employee - The employee instance (Director or Teacher)
   * @returns A string representing the task the employee is performing
   */
export function executeWork(employee: (Director | Teacher)): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

/**
 * Type definition for possible subjects a teacher can teach.
 * Includes 'Math' and 'History'.
 */
export type Subjects = ('Math' | 'History');

/**
 * Function to determine which subject is being taught today.
 * Based on the value of todayClass, either Math or History is being taught.
 * @param todayClass - The subject being taught today (Math or History)
 * @returns A string indicating which subject is being taught
 */
export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

