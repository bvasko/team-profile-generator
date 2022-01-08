const Employee = require("./Employee");

class Intern extends Employee {
  constructor() {
    super('Intern');
  }
  setSchool(school) {
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;