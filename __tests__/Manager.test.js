const Manager = require('../src/Manager');

describe('Manager', () => {
  it('should have a role of Manager', () => {
    const worker = new Manager();
    const role = worker.getRole();
    const expectedRole = "Manager";
    expect(role).toEqual(expectedRole);
  });
  it('should set and get an office number', () => {
    const worker = new Manager("Manager");
    const expectedOfficeNumber = 1;
    worker.setOfficeNumber(1);
    const officeNumber = worker.getOfficeNumber();
    expect(expectedOfficeNumber).toEqual(officeNumber);
  });
});