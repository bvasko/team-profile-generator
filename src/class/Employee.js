const { v4: uuidv4 } = require('uuid');

class Employee {
  //Set default values for parameters
  #id;
  constructor(role = '--', name = '--') {
    this.role = role;
    this.#id = uuidv4();
    this.name = name;
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
}

module.exports = Employee;