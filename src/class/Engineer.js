const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, employeeId) {
    super('Engineer', name, employeeId);
  }
  setGithub(username) {
    this.github = username;
  }
  getGithub() {
    return this.github;
  }
  getOther() {
    return {
      label: 'Github',
      value: this.getGithub()
    }
  }
}

module.exports = Engineer;