const Employee = require("./Employee");

/**
 * Extends employee
 * 
 *  github—GitHub username
 *  getGithub()
 *  getRole()—overridden to return 'Engineer'
 */

class Engineer extends Employee {
  constructor() {
    super('Engineer');
  }
  setGithub(username) {
    this.github = username;
  }
  getGithub() {
    return this.username;
  }
}

module.exports = Engineer;