namespace Subjects {
  // Interface representing a Teacher in the Subjects namespace
  export interface Teacher {
    experienceTeachingJava?: number; // Optional property for teaching experience in Java
  }

  // Class representing the Java subject, extending from the base Subject class
  export class Java extends Subjects.Subject {
    // Method to retrieve the requirements for the Java course
    getRequirements(): string {
      return 'Here is the list of requirements for Java'; // Returning a string that lists the requirements
    }

    // Method to check and return information about the available teacher for the Java subject
    getAvailableTeacher(): string {
      // Check if the teacher exists and has sufficient teaching experience in Java
      if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
        return 'No available teacher'; // Return message if no teacher is available
      }
      // Return the name of the available teacher
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
