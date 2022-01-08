const Intern = require('../src/Intern');

describe('Intern', () => {
  it('should return a role of Intern', () => {
    const worker = new Intern();
    const role = worker.getRole();
    const expectedRole = "Intern";
    expect(role).toEqual(expectedRole);
  });
  it('should get and set a school', () => {

  });
});