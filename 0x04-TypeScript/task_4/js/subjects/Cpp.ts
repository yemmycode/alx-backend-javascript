namespace Subjects {
  // Defining an interface for a Teacher in the Subjects namespace
  export interface Teacher {
    experienceTeachingC?: number; // Optional property for teaching experience in C++
  }

  // Class representing the C++ subject, extending from the base Subject class
  export class Cpp extends Subjects.Subject {
    // Method to get the requirements for the C++ course
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp'; // Returning the requirements string
    }

    // Method to get information about the available teacher for the C++ subject
    getAvailableTeacher(): string {
      // Check if the teacher is available and has sufficient teaching experience
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher'; // Return message if no teacher is available
      }
      // Return the name of the available teacher
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
