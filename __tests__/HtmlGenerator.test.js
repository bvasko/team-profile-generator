const HtmlGenerator = require('../src/class/HtmlGenerator');
const Manager = require('../src/class/Manager.js');
const Engineer = require('../src/class/Engineer.js');
const Intern = require('../src/class/Intern.js');

/**
 * Setup mock data
 */
const manager = new Manager('Boss Lady');
manager.setEmail('bvasko@gmail.com');
manager.setOfficeNumber(44);

const engineer = new Engineer('Bonnie D.');
engineer.setEmail('bvasko@gmail.com');
engineer.setGithub('bvasko');

const intern = new Intern('Dipasquale');
intern.setEmail('bvasko@gmail.com');
intern.setSchool('Penn LPS');

 const mock = {
  Manager: [ manager ],
  Engineer: [ engineer ],
  Intern: [ intern ]
};

describe('HtmlGenerator', () => {
  it('should have team data', () => {
    const htmlGen = new HtmlGenerator(mock);
  });
  it('should have title tags', () => {
    const htmlGen = new HtmlGenerator(mock);
    const htmlStart = htmlGen.getPageHead();
    expect(htmlStart).toContain('<title>');
  });
  it('should have a body tag', () => {
    const htmlGen = new HtmlGenerator(mock);
    const htmlStart = htmlGen.getPageHead();
    expect(htmlStart).toContain('<body>');
  });
  it('should have a banner with text', () => {

  });
  it('should render the correct number of employee cards', () => {
    const htmlGen = new HtmlGenerator(mock);
    const cards = htmlGen.getEmployeeCards();
  });
  describe('Employee Profile Card', () => {
    it('should return a coffee cup icon for the manager', () => {
      const htmlGen = new HtmlGenerator(mock);
      const icon = htmlGen.getIcon('manager');
      expect(icon).toEqual('mug-hot-solid.svg');
    });
    it('should return an eyeglass icon for an engineer', () => {
      const htmlGen = new HtmlGenerator(mock);
      const icon = htmlGen.getIcon('engineer');
      expect(icon).toEqual('glasses-solid.svg');
    });
    it('should return a student icon for an intern', () => {
      const htmlGen = new HtmlGenerator(mock);
      const icon = htmlGen.getIcon('intern');
      expect(icon).toEqual('user-graduate-solid.svg');
    });
  })
});