const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name) {
    super('Intern', name);
  }
  setSchool(school) {
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;