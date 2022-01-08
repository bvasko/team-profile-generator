const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions.js');

const defaultQuestions = questions();
const employees = [];

function askQuestions(questionArr) {
  inquirer
  .prompt(questionArr)
  .then((response => {
    //If this is the first time answering the questions, then set the role to manager
    if (employees.length === 0) {
      const manager = {...response, roleType: 'Manager'};
      employees.push(manager);
    }
    if (response.roleType === 'Intern' || response.roleType === 'Engineer') {
      employees.push(response);
      const questionsByRole = questions(response.roleType);
      askQuestions(questionsByRole);
    } else {
      employees.forEach(employee => console.log(employee.roleType));
      console.log('Generating Page...');
    }
  }));
}


// Start asking questions
askQuestions(defaultQuestions);
