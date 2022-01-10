const fs = require('fs');

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
    <link rel="stylesheet" href="../css/employees.css">
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

  getEmployeeCard(role) {
    const icon = getIcon(role);
    return ``;
  }

  getEmployeeCards() {
    this.teamData.map(member => {
      console.log(typeof member);
    });
  }

  createPage() {
    const parts = [
      this.getPageHead(),
      this.getTitleBanner(),
      this.getPageClose(),
      this.getEmployeeCards()
    ]
    parts.join('');
    fs.writeFile('./dist/test.html',  parts.join(''), (err) => {
      if (err) console.log(err);
      console.log("File done")
    });
    // return parts.join('');
  }
}

module.exports = HtmlGenerator;