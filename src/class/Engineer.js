const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name) {
    super('Engineer', name);
  }
  setGithub(username) {
    this.github = username;
  }
  getGithub() {
    return this.github;
  }
  getOther() {
    return {
      label: 'github',
      value: this.getGithub()
    }
  }
}

module.exports = Engineer;