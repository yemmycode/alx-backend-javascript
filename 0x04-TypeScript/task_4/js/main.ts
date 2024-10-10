// Creating instances of the Cpp, Java, and React subjects
export const cpp: Subjects.Cpp = new Subjects.Cpp(); 
export const java: Subjects.Java = new Subjects.Java(); 
export const react: Subjects.React = new Subjects.React(); 

// Defining a teacher object with experience in teaching C
export const cTeacher: Subjects.Teacher = {
  firstName: 'Yemi', 
  lastName: 'Ajibade', 
  experienceTeachingC: 10, 
};

// Logging information for the C++ subject
console.log('C++'); 
cpp.setTeacher = cTeacher; 
console.log(cpp.getRequirements()); 
console.log(cpp.getAvailableTeacher()); 

// Logging information for the Java subject
console.log('Java'); 
java.setTeacher = cTeacher; 
console.log(java.getRequirements()); 
console.log(java.getAvailableTeacher()); 

// Logging information for the React subject
console.log('React'); 
react.setTeacher = cTeacher; 
console.log(react.getRequirements()); 
console.log(react.getAvailableTeacher()); 
