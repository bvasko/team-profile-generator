const fs = require('fs');

class HtmlGenerator {
  constructor(teamData = {}) {
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

  getPageHead() {
    return `<!doctype html>
    <html lang="en">
    <head>
      <title>Hello, world!</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="" />
      <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/employees.css">
    <!-- Optional theme -->
    
    </head>
    <body>`;
  }

  getPageClose() {
    return `
    </body>
    </html>`;
  }

  getTitleBanner() {
    return `  
    <div class="row header">
      <div class="col-md-12">
        <h1>My Team</h1>
      </div>
    </div>`;
  }

  getEmployeeCard(member) {
    const {role, email, id, name} = member;
    const icon = this.getIcon(role);
    const other = member.getOther();
    return `<div class="col-md-4">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h1 class="panel-title">${name}</h1>
          <h2 class="panel-title">
            <img class="icon" src="./img/${icon}" />${role}</h2>
          </div>
          <div class="panel-body">
            <div class="info-row">Id: ${id}</div>
            <div class="info-row">Email: ${email}</div>
            <div class="info-row">${other.label}: ${other.value} </div>
          </div>
        </div>
      </div>`;
  }

  getEmployeeCards() {
    let html = '<div class="container"><div class="row">';
    for (const prop in this.data) {
      const employeesByType = this.data[prop];
      if (employeesByType.length === 0) return;
      employeesByType.forEach(member => {
        // console.log('member data', member);
        html = html + this.getEmployeeCard(member);
      });
    }
    return html + '</div></div>';
  }

  createPage() {
    const parts = [
      this.getPageHead(),
      this.getTitleBanner(),
      this.getEmployeeCards(),
      this.getPageClose()
    ]
    parts.join('');
    fs.writeFile('./dist/test.html',  parts.join(''), (err) => {
      if (err) console.log(err);
    });
    console.log("File done");
    return "Success";
  }
}

module.exports = HtmlGenerator;