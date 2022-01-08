/**
name
id
email
getName()
getId()
getEmail()
getRole()—returns 'Employee' 
*/

class Employee {
  constructor(name, id, email) {
    this.role = "Employee";
    this.name = name;
    this.id = id;
    this.email = email;
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