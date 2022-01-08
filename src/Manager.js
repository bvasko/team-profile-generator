const Employee = require("./Employee");
/**
 * Extends
 * officeNumber
getRole()—overridden to return 'Manager'
 */

class Manager extends Employee {
  constructor() {
    super('Manager');
  }
  setOfficeNumber(officeNumber) {
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;