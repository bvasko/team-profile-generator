const Manager = require('../src/Manager');

describe('Manager', () => {
  it('should have a role of Manager', () => {
    const worker = new Manager();
    const role = worker.getRole();
    const expectedRole = "Manager";
    expect(role).toEqual(expectedRole);
  });
  it('should get and set an office number', () => {

  });
});