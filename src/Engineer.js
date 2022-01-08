const Employee = require("./Employee");

/**
 * Extends employee
 * 
 *  github—GitHub username
 *  getGithub()
 *  getRole()—overridden to return 'Engineer'
 */

class Engineer extends Employee {
  constructor(username) {
    this.role = 'Engineer';
    this.username = username;
  }
  getGithub() {
    return this.username;
  }
}