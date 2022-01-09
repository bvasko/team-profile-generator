const fs = require('fs');
const Manager = require('../class/Manager.js');
const Engineer = require('../class/Engineer.js');
const Intern = require('../class/Intern.js');

//This can't live here
const employees = {
  Manager: [],
  Engineer: [],
  Intern: []
};

function createEmployee(data) {
  console.log('make employee', data);
  let employee;
  const {roleType, name, email} = data;

  switch(data.roleType) {
    case('Manager'):
      employee = new Manager(name);
      employee.setEmail(email);
      employee.setOfficeNumber(data.officeNumber);
      break;
    case('Intern'):
      employee = new Intern(name);
      employee.setSchool(data.school);
      break;
    case('Engineer'):
      employee = new Engineer(name);
      employee.setGithub(data.github);
      break;
  }
  employees[roleType].push(employee);
  return [employee, employees];

}

module.exports = createEmployee;