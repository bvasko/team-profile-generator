const Employee = require("./Employee");
/**
 * Extends
 * officeNumber
getRole()—overridden to return 'Manager'
 */

class Manager extends Employee {
  constructor() {
    this.role = 'Manager';
  }
}