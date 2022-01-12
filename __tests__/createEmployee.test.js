const Manager = require('../src/class/Manager.js');
const Engineer = require('../src/class/Engineer.js');
const Intern = require('../src/class/Intern.js');
const createEmployee = require('../src/utils/createEmployee.js');

describe('createEmployee', () => {
  it('should create a manager when the role is manager', () => {
    const data = {
      name: 'Bonnie',
      email: 'bvasko@gmail.com',
      officeNumber: '0',
      nextRoleType: 'Engineer',
      roleType: 'Manager'
    };
    const employees = createEmployee(data);
    const mgr = employees[1]['Manager'][0];
    expect(mgr instanceof Manager).toEqual(true);
  });
  it('should create an intern when the role is intern', () => {
    const data = {
      name: 'Bonnie',
      email: 'bvasko@gmail.com',
      school: 'Penn LPS',
      nextRoleType: "I don't want to add any more team members",
      roleType: 'Intern'
    };
    const employees = createEmployee(data);
    const intern = employees[1]['Intern'][0];
    expect(intern instanceof Intern).toEqual(true);
  });

  it('should create an engineer when the role is engineer', () => {
    const data = {
      name: 'Bonnie D',
      email: 'bvasko@gmail.com',
      github: 'bvasko',
      nextRoleType: 'Engineer',
      roleType: 'Engineer'
    };
    const employees = createEmployee(data);
    const engineer = employees[1]['Engineer'][0];
    expect(engineer instanceof Engineer).toEqual(true);
  });
});