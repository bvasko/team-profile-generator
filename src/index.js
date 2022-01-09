const inquirer = require('inquirer');
const getQuestions = require('./questions.js');
const createEmployee = require('./utils/createEmployee.js');
const htmlGenerator = require('./class/HtmlGenerator.js');
const HtmlGenerator = require('./class/HtmlGenerator.js');

function askQuestions(questionArr, role) {
  inquirer
  .prompt(questionArr)
  .then((response => {
    const data = createEmployee({...response, roleType: role});
    const employees = data[1];
    if (response.nextRoleType === 'Intern' || response.nextRoleType === 'Engineer') {
      const questionsByRole = getQuestions(response.nextRoleType);
      askQuestions(questionsByRole, response.nextRoleType);
    } else {
      const htmlGen = new HtmlGenerator(employees);
      const html = htmlGen.createPage();
      console.log('Generating Page...', html);
    }
  }));
}

const defaultQuestions = getQuestions();
// Set first role to Manager & start asking questions
askQuestions(defaultQuestions, 'Manager');

