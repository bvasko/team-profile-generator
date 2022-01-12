const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, employeeId) {
    super('Intern', name, employeeId);
  }
  setSchool(school) {
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getOther() {
    return {
      label: 'School',
      value: this.getSchool()
    }
  }
}

module.exports = Intern;