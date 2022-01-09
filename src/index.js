const inquirer = require('inquirer');
const getQuestions = require('./questions.js');
const createEmployee = require('./utils/createEmployee.js');

const defaultQuestions = getQuestions();
let role = null;


function askQuestions(questionArr) {
  inquirer
  .prompt(questionArr)
  .then((response => {
    const data = createEmployee({...response, roleType: role});
    const [employee, employees] = data;
    if (response.nextRoleType === 'Intern' || response.nextRoleType === 'Engineer') {
      role = response.nextRoleType;
      const questionsByRole = getQuestions(response.nextRoleType);
      askQuestions(questionsByRole);
    } else {
      role = undefined;
      console.log('Generating Page...');
    }
  }));
}


// Set initial role to manager
role = 'Manager';

// Start asking questions
askQuestions(defaultQuestions);

