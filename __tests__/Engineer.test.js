// needs employee since this is the base class
const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

//test 11 get the git hub user name for a engineer
test('creates git hub user name for an engineer', () => {
    const githubusername = "squarewheels";
    const engineer = new Engineer("SWheels", 951 , "squarewheels@flinstones.com", githubusername);
    expect(engineer.githubUsername).toEqual(githubusername);
  });

//test 12 getGithubUsername() function for a manager
test('get githubUsername for an engineer from function', () => {
    const githubusername = "2footbrakes";;
    const engineer = new Engineer("Footbrakes", 654 , "footbrakes@flinstones.com", githubusername);
    expect(engineer.getGithubUsername()).toEqual(githubusername);
  });  

 //test 13 getRole() function for an engineer
test('creates the role of engineer from function', () => {
    const role = "Engineer";
    const engineer = new Engineer("Rockroof", 654 , "Rockroof@flinstones.com", "nosunroof");
    expect(engineer.getRole()).toEqual(role);
  }); 


