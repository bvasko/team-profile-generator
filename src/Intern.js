const Employee = require("./Employee");
/**
 * Extends employee
school
getSchool()
getRole()—overridden to return 'Intern'
 */
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