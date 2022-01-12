const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id) {
    super('Manager', name, id);
  }
  setOfficeNumber(officeNumber) {
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getOther() {
    return {
      label: 'Office number',
      value: this.getOfficeNumber()
    }
  }
}

module.exports = Manager;