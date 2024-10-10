namespace Subjects {
  // Interface defining a Teacher in the Subjects namespace
  export interface Teacher {
    experienceTeachingReact?: number; // Optional property for the teacher's experience in teaching React
  }

  // Class representing the React subject, which extends the base Subject class
  export class React extends Subjects.Subject {
    // Method to return the requirements for the React course
    getRequirements(): string {
      return 'Here is the list of requirements for React'; // Returning a string that outlines the requirements
    }

    // Method to retrieve information about the available teacher for the React subject
    getAvailableTeacher(): string {
      // Check if the teacher is defined and has adequate experience in teaching React
      if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
        return 'No available teacher'; // Return message if no teacher is available
      }
      // Return the name of the available teacher
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
