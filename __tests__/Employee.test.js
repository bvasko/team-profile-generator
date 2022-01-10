const Employee = require('../src/class/Employee');

describe('Employee', () => {
  it('should return a role when instantiated', () => {
    const worker = new Employee("Employee", "Bonnie Dipasquale");
    const role = worker.getRole();
    const expectedRole = "Employee";
    expect(role).toEqual(expectedRole);
  });
  it('should return a name', () => {
    const worker = new Employee("Employee", "Bonnie");
    const expectedName = "Bonnie";
    const name = worker.getName();
    expect(expectedName).toEqual(name);
  });
  it('should have an id', () => {
    const worker = new Employee("Employee", "Bonnie Dipasquale");
    expect(worker.getId()).not.toBe('');
  });
  it('should have a read-only id', () => {
    /* 
    not quite read-only but that's because 
    js classes can still have a public id property added 
    when it has a private id already in place
    */
    const worker = new Employee("Employee", "Bonnie Dipasquale");
    const id = worker.getId();
    worker.id = 5;
    expect(id).not.toBe(5);
  });
  it('should have default values if no arguments are passed', () => {
    const worker = new Employee();
    expect(worker.name).toEqual('--');
  });
  it('should return an email', () => {
    const worker = new Employee("Employee");
    worker.setEmail('bvasko@gmail.com');
    expect(worker.getEmail()).toEqual('bvasko@gmail.com');
  });
});