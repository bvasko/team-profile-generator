const inquirer = require('inquirer');
const getQuestions = require('./questions.js');
const createEmployee = require('./utils/createEmployee.js');

function askQuestions(questionArr, role) {
  inquirer
  .prompt(questionArr)
  .then((response => {
    const data = createEmployee({...response, roleType: role});
    const [employee, employees] = data;
    if (response.nextRoleType === 'Intern' || response.nextRoleType === 'Engineer') {
      const questionsByRole = getQuestions(response.nextRoleType);
      askQuestions(questionsByRole, response.nextRoleType);
    } else {
      console.log('Generating Page...');
    }
  }));
}

const defaultQuestions = getQuestions();
// Set first role to Manager & start asking questions
askQuestions(defaultQuestions, 'Manager');

