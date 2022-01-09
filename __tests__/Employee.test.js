const Employee = require('../src/class/Employee');

describe('Employee', () => {
  it('should return a role when instantiated', () => {
    const worker = new Employee("Employee", 1, "Bonnie Dipasquale");
    const role = worker.getRole();
    const expectedRole = "Employee";
    expect(role).toEqual(expectedRole);
  });
  it('should get and set a name', () => {
    const worker = new Employee("Employee", 1);
    const expectedName = "Bonnie";
    worker.setName("Bonnie");
    const name = worker.getName();
    expect(name).toEqual(name);
  });
  it('should have an id', () => {
    const worker = new Employee("Employee", 1, "Bonnie Dipasquale");
    expect(worker.getId()).toEqual(1);
  });
  it('should have default values if no arguments are passed', () => {
    const worker = new Employee();
    expect(worker.getId()).toEqual(0);
  });
  it('should get and set an email', () => {
    const worker = new Employee("Employee");
    worker.setEmail('bvasko@gmail.com');
    expect(worker.getEmail()).toEqual('bvasko@gmail.com');
  });
});