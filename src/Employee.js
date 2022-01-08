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
  //Set default values for parameters
  constructor(role = '--', id = '0', name = '--') {
    this.role = role;
    this.id = id;
    this.name = name;
  }
  setName(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
  }
  getId() {
    return this.id;
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