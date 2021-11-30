const inquirer = require('inquirer');
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const fs = require('fs');
const path = require('path');
const createHTML = require('./src/createHTML');

const team=[];

// set of questions for manager
const managerQuestions =[
    {
        type: "input",
        message: "What is the Managers's name?",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the ID number for the Manager?",
        name: "id",
    },
    { 
        type: "input",
        message: "What's the email address for the Manager?",
        name: "email",
    },
    {
         // asking special question that belongs to Manager
         type: "input",
         message: "What is the Office Number for the Manager?",
         name: "officeNumber",
  },
]
   
        
//return the managers array

function getManager() {
        inquirer.prompt(managerQuestions)
.then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, "Manager", answers.officeNumber, );
    console.log(manager);
    team.push(manager);
    getEngineer();
});

};
// need logic to ask which type of employee you want to enter and if you are done
// need to add validation

// set of questions for engineer 
const engineerQuestions =[
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Enter the ID number for the Engineer?",
            name: "id",
        },
        { 
            type: "input",
            message: "What's the email address for the Engineer?",
            name: "email",
        },
        {
             // asking special question that belongs to engineer
             type: "input",
             message: "What is the GitHub user name for the Engineer?",
             name: "githubUsername",
      },
]
       
            
//return the engineers array

function getEngineer() {
            inquirer.prompt(engineerQuestions)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, "Engineer", answers.githubUsername );
        console.log(engineer);
        team.push(engineer);
        getIntern();
    });

};

// set of questions for interns
const internQuestions =[
    {
        type: "input",
        message: "What is the Intern's name?",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the ID number for the Intern?",
        name: "id",
    },
    { 
        type: "input",
        message: "What's the email address for the Intern?",
        name: "email",
    },
    {
         // asking special question that belongs to intern
         type: "input",
         message: "What is school is the intern attending?",
         name: "schoolname",
  },
]
   
        
//return the interns array

function getIntern() {
        inquirer.prompt(internQuestions)
.then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, "Intern", answers.schoolname, );
    team.push(intern);
    console.log(intern);
    console.log(team);
    generatePage(team);
});

};
// function to write file
function writeToFile (fileName,data) {
    fs.writeFile(path.join(__dirname,fileName),data,function(err) {
        if(err)throw(err)
        console.log('File Written');
    })
};

// function to create HTML page
function generatePage(team) {
    const html = createHTML(team);
    console.log("trying to generate HTML")
    return writeToFile('team.html', html);
}

getManager();


