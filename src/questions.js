// Set parameter default to manager
function getQuestions(role = 'Manager') {
  const required = [
    {
      type: 'input',
      message: `What is your ${role.toLowerCase()}'s name?`,
      name: 'name',
      default: 'Bonnie'
    },
    {
      type: 'input',
      message: `What is your ${role.toLowerCase()}'s email?`,
      name: 'email',
      default: 'bvasko@gmail.com'
    }
  ];
  const roleSpecific = {
    Intern: [
      {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
        default: '--'
      }
    ],
    Engineer: [
      {
        type: 'input',
        message: 'What is the engineer\'s github username?',
        name: 'github',
        default: '--'
      }
    ],
    Manager: [
      {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        default: '0'
      }
    ]
  }
  return [
    ...required,
    ...roleSpecific[role],
    {
      type: 'list',
      message: 'What kind of employee would you like to create?',
      choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'],
      name: 'nextRoleType'
    }
  ];
}

module.exports = getQuestions;