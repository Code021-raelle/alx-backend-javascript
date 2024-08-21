/**
 *  class with the getHomepage static method
 */

class AppController {
    static getHomepage(req, res) {
        res.status(200).send('Hello Holberton School!');
    }
}

export default AppController;
module.exports = AppController;
