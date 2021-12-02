const fs = require("fs");
//TO: FIX email link and github link
// Creates HTML based on the team members entered

function createHTML(data) {

  return `
    <!DOCTYPE html>
    <html lang="en-us">
    
    <head>
    
      <meta charset="UTF-8">
      <title>Team Generator</title>
    
      <!-- Team Generator-->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    
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
     #cardcontainer {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
     }
     .card {
        width: 20rem;
        height: 20rem;
         box-shadow: 5px 5px lightgrey;
         margin-bottom: 4rem;
     }
     .list-group {
      width: 20rem;
      height: 25rem;
    
    }
   
    </style>
          
        <!-- Header -->
          <div class="col-sm-12" id="profileheader">
            <h1 class="text-center">Development Team</h1>
          </div>
        </div>
      <!-- Start of Employee Cards -->
      <!-- TO DO: switch from vertical -->
      <div class="container" id="cardcontainer">
      <div class="card" id="employeecards"> 
        
     ${createEmployeeCards(data)}
     
    </body>
    
    </html>   
    
    `;
}

function createEmployeeCards(data) {
  return data.map((data) => {
    console.log(data);
    let role = data.getRole();
    switch(role) {
      case "Manager":
        return createManagercard(data);
        break;
        case "Engineer":
        return createEngineercard(data);
        break;
        case "Intern":
        return createInterncard(data);
        break;
    }
  }).join('')
};

function createManagercard(data) {
  return `
  <div class="card">
          <div class="card-body" id="employeeheader">
          <h4 class="card-title">${data.name}</h4>
          <i class="material-icons">business_center</i>
          <h5 class="card-text">Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: 
          <a href="mailto:${data.email}">${data.email}</a>
          </li>
          <li class="list-group-item">Office Number: ${data.officeNumber}</li>
        </ul> 
       </div> 
      </div>
      `
};

function createEngineercard(data) {
  return `
  <div class="card">
  <div class="card-body" id="employeeheader">
  <h4 class="card-title">${data.name}</h4>
  <i class="material-icons">engineering</i>
  <h5 class="card-text">Engineer</h5>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${data.id}</li>
  <li class="list-group-item">Email: 
  <a href="mailto:${data.email}">${data.email}</a>
   </li>
  <li class="list-group-item">GitHub: 
    <a href="https://github.com/${data.githubUsername}">${data.githubUsername}</a>
  </li>
  </ul>
</div>
`
};

function createInterncard(data) {
  return `
<div class="card">
<div class="card-body" id="employeeheader">
<h4 class="card-title">${data.name}</h4>
<i class="material-icons">backpack</i>
<h5 class="card-text">Intern</h5>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${data.id}</li>
<li class="list-group-item">Email: 
  <a href="mailto:${data.email}">${data.email}</a>
   </li>
<li class="list-group-item">School: ${data.schoolname}</li>
</ul>
</div>
`
};
// exports the createHTML function
module.exports = createHTML;
