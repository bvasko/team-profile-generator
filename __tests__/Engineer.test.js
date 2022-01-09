const Engineer = require('../src/class/Engineer');

describe('Engineer', () => {
  it('should have a role of Engineer', () => {
    const worker = new Engineer();
    const role = worker.getRole();
    const expectedRole = "Engineer";
    expect(role).toEqual(expectedRole);
  });
  it('should get the github username', () => {
    const worker = new Engineer();
    const username = 'bvasko';
    worker.setGithub(username);
    expect(worker.getGithub()).toEqual(username);
  });
});