const fs = require("fs");

// Creates HTML based on the team members entered

function createHTML(team) {

  return `
    <!DOCTYPE html>
    <html lang="en-us">
    
    <head>
    
      <meta charset="UTF-8">
      <title>Team Generator</title>
    
      <!-- Team Generator-->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    
    </head>
    
    <body>
     <style>
     #profileheader {
       background:red;
       color: white;
       margin-bottom: 20px;;
     }
    #employeeheader {
       background: cornflowerblue;
       color: white;
     }
     .card {
         max-width: 15rem;
         box-shadow: 5px 5px lightgrey;
     }
   
    </style>
      <!-- Creates the Overall Page -->
      <div class="container">
    
        <!-- Row 1 -->
        <div class="row">
          <div class="col-sm-12" id="profileheader">
            <h1 class="text-center">Development Team</h1>
          </div>
        </div>
      <!-- Only one manager and always first -->
        <div class="row card-columns">
        <div class="card">
          <div class="card-body" id="employeeheader">
          <h4 class="card-title">${team[0].name}</h4>
          <h5 class="card-text">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${team[0].id}</li>
          <li class="list-group-item">Email: ${team[0].email}</li>
          <li class="list-group-item">Office Number: ${team[0].officeNumber}</li>
        </ul>
        <!-- to do: create loops for engineers and interns -->
        </div>
        <div class="card">
        <div class="card-body" id="employeeheader">
        <h4 class="card-title">${team[1].name}</h4>
        <h5 class="card-text">Engineer</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${team[1].id}</li>
        <li class="list-group-item">Email: ${team[1].email}</li>
        <li class="list-group-item">GitHub: ${team[1].githubUsername}</li>
      </ul>
      </div>
      </div>
        <div class="card">
        <div class="card-body" id="employeeheader">
        <h4 class="card-title">${team[2].name}</h4>
        <h5 class="card-text">Intern</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${team[2].id}</li>
        <li class="list-group-item">Email: ${team[2].email}</li>
        <li class="list-group-item">School: ${team[2].schoolname}</li>
      </ul>
      </div>
       
    
    </body>
    
    </html>   
    
    `;
}

// exports the createHTML function
module.exports = createHTML;
