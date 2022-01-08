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
  constructor(role) {
    this.role = role;
  }
  setName(name) {
    this.name = name;
  }
  setId(id) {
    this.id = id;
  }
  setEmail(email) {
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