namespace Subjects {
  // Class representing a generic Subject
  export class Subject {
    // Property to hold the teacher associated with the subject
    teacher: Subjects.Teacher;

    // Setter method to assign a teacher to the subject
    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher; // Assigning the provided teacher to the teacher property
    }
  }
}
