const Employee = require('../src/Employee');

describe('Employee', () => {
  it('should return a role when instantiated', () => {
    const worker = new Employee("Employee");
    const role = worker.getRole();
    const expectedRole = "Employee";
    expect(role).toEqual(expectedRole);
  });
  it('should get and set a name', () => {
    const worker = new Employee("Employee");
    const expectedName = "Bonnie";
    worker.setName("Bonnie");
    const name = worker.getName();
    expect(name).toEqual(name);
  });
  it('should get and set an id', () => {

  });
  it('should get and set an email', () => {

  });
});