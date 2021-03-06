const questions = require('../src/questions');

describe('questions', () => {
  it('should return the manager\'s questions if there is no role passed', () => {
    const allQuestions = questions();
    const managerQuestions = [{
      type: 'input',
      message: 'What is the manager\'s office number?',
      name: 'officeNumber',
      default: '0'
    }];
    expect(allQuestions.length).toEqual(5);
    expect(allQuestions).toEqual(expect.arrayContaining(managerQuestions));
  });
});