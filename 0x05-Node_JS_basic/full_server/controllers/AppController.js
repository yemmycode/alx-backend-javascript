/**
 * Handles various routes for the application.
 */
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

