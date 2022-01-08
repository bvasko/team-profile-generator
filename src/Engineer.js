const Employee = require("./Employee");

class Engineer extends Employee {
  constructor() {
    super('Engineer');
  }
  setGithub(username) {
    this.github = username;
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;