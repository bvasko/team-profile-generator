const Employee = require("./Employee");
/**
 * Extends employee
school
getSchool()
getRole()—overridden to return 'Intern'
 */
class Intern extends Employee {
  constructor(school) {
    this.role = 'Intern';
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}