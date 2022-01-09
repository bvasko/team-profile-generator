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
    console.log('data ', htmlGen.data.Manager)

  });
  it('should have title tags', () => {

  });
  it('should have a banner with text', () => {

  });
  it('should render the correct number of employee cards', () => {

  });
  describe('Employee Profile Card', () => {
    it('should show a coffee cup icon for the manager', () => {

    });
    it('should show an eyeglass icon for an engineer', () => {
  
    });
    it('should show a student icon for an intern', () => {
  
    });
  })

 
});