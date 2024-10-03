import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default async function asyncUploadUser(firstName, lastName) {
  try {
    const photoResponse = await uploadPhoto('yourFileName.jpg'); // Call the uploadPhoto function
    const userResponse = await createUser(firstName, lastName); // Call the createUser function with parameters

    return {
      photo: photoResponse,
      user: userResponse,
    }; // Return an object with responses if both succeed
  } catch (error) {
    return {
      photo: null,
      user: null,
    }; // Return an empty object if either function fails
  }
}
