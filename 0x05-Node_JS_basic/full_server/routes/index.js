import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Maps the routes to their respective handlers in the provided
 * Express application.
 * @param {Express} appInstance The Express application instance.
 */
const mapAppRoutes = (appInstance) => {
  appInstance.get('/', AppController.getHomepage);
  appInstance.get('/students', StudentsController.getAllStudents);
  appInstance.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapAppRoutes;
module.exports = mapAppRoutes;

