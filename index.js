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
        console.log("----Add the Manager----");
        inquirer.prompt(managerQuestions)
.then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, "Manager",);
    team.push(manager);
    getnextEmployee();
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
            console.log("----Add the Engineer----")
            inquirer.prompt(engineerQuestions)
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername, "Engineer");
        team.push(engineer);
        getnextEmployee();
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
    console.log("----Add the Intern----")
        inquirer.prompt(internQuestions)
.then(answers => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.schoolname,"Intern" );
    team.push(intern);
    getnextEmployee();
});

};

const employeeQuestion = [
    {
    type: "list",
    message: "Which type of employee would you like to add the Development Team?",
    name: "employeerole",
    choices: ["Engineer", "Intern", "All Employees Added"]     
    }
]

function getnextEmployee() {
    console.log("----Add Next Employee----");
    inquirer.prompt(employeeQuestion)
    .then (function(data) {
        console.log(data.employeerole);
        switch (data.employeerole) {
            case "Engineer":
                getEngineer();
                       
            break;

            case "Intern":
                getIntern();
                
            break;

            case "All Employees Added":
                console.log("----Generating Development Team Chart----");
                generatePage(team);
        }
    })
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
    console.log("Generating HTML")
    return writeToFile('team.html', html);
}

getManager();

