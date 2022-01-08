const inquirer = require('inquirer');
const fs = require('fs');
const getQuestions = require('./questions.js');

const defaultQuestions = getQuestions();
const employees = [];

function setRoleToManager(response) {
  return {...response, roleType: 'Manager'};
}

function askQuestions(questionArr) {
  inquirer
  .prompt(questionArr)
  .then((response => {
    //If this is the first time answering the questions, then set the role to manager
    if (employees.length === 0) {
      employees.push(setRoleToManager(response));
    }
    if (response.roleType === 'Intern' || response.roleType === 'Engineer') {
      employees.push(response);
      const questionsByRole = getQuestions(response.roleType);
      askQuestions(questionsByRole);
    } else {
      employees.forEach(employee => console.log(employee.roleType));
      console.log('Generating Page...');
    }
  }));
}


// Start asking questions
askQuestions(defaultQuestions);

