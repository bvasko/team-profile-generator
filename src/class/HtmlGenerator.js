class HtmlGenerator {
  constructor(teamData = {}) {
    //console.log('gen data ', teamData);
    this.data = teamData;
    this.html;
  }
  getIcon(role) {
    const icons = {
      engineer: 'glasses-solid.svg',
      intern: 'user-graduate-solid.svg',
      manager: 'mug-hot-solid.svg'
    }
    return icons[role.toLowerCase()];
  }
  
  getPageHead() {}

  getPageClose() {}

  getEmployeeCard() {}

  getEmployeeCards() {
    this.teamData.map(member => {
      console.log(typeof member);
    })
  }

  createPage() {
    return this.html;
  }
}

module.exports = HtmlGenerator;