const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name) {
    super('Manager', id, name);
  }
  setOfficeNumber(officeNumber) {
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;