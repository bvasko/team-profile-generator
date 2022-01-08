const Employee = require("./Employee");

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