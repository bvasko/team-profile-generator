const Engineer = require('../src/Engineer');

describe('Engineer', () => {
  it('should have a role of Engineer', () => {
    const worker = new Engineer();
    const role = worker.getRole();
    const expectedRole = "Engineer";
    expect(role).toEqual(expectedRole);
  });
  it('should get and set a github username', () => {
    
  });
});