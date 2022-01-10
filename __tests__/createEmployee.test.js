const questions = require('../src/utils/createEmployee.js');

describe('createEmployee', () => {
  it('should create a manager when the role is manager', () => {
    const data = {
      name: 'Bonnie',
      email: 'bvasko@gmail.com',
      officeNumber: '0',
      nextRoleType: 'Engineer',
      roleType: 'Manager'
    };
  });
  it('should create an intern when the role is intern', () => {
    const data = {
      name: 'Bonnie',
      email: 'bvasko@gmail.com',
      school: 'Penn LPS',
      nextRoleType: "I don't want to add any more team members",
      roleType: 'Intern'
    };
  });

  it('should create an engineer when the role is engineer', () => {
    const data = {
      name: 'Bonnie D',
      email: 'bvasko@gmail.com',
      github: 'bvasko',
      nextRoleType: 'Engineer',
      roleType: 'Engineer'
    };
  });
});