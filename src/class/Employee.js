const { v4: uuidv4 } = require('uuid');

class Employee {
  //Set default values for parameters
  #id;
  constructor(role = '--', name = '--', employeeId = 0) {
    this.role = role;
    this.#id = uuidv4();
    this.name = name;
    this.employeeId = employeeId;
  }
  setName(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
  }
  getId() {
    return this.#id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  getEmployeeId() {
    return this.employeeId;
  }
}

module.exports = Employee;