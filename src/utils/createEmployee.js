const Manager = require('../class/Manager.js');
const Engineer = require('../class/Engineer.js');
const Intern = require('../class/Intern.js');

const employees = {
  Manager: [],
  Engineer: [],
  Intern: []
};

function createEmployee(data) {
  let employee;
  const {roleType, name, email, employeeId} = data;

  switch(data.roleType) {
    case('Manager'):
      employee = new Manager(name, employeeId);
      employee.setEmail(email);
      employee.setOfficeNumber(data.officeNumber);
      break;
    case('Intern'):
      employee = new Intern(name, employeeId);
      employee.setEmail(email);
      employee.setSchool(data.school);
      break;
    case('Engineer'):
      employee = new Engineer(name, employeeId);
      employee.setEmail(email);
      employee.setGithub(data.github);
      break;
  }
  employees[roleType].push(employee);
  return [employee, employees];

}

module.exports = createEmployee;