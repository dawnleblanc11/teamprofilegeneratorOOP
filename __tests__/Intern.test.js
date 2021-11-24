// connects test to files you are testing
// needs employee since this is the base class
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");


//test 14 get the schoolname name for an intern
test('creates schoolname for an intern', () => {
    const schoolname = "schoolofrock";
    const intern = new Intern("fruitypebble", 147 , "fruitpebble@flinstones.com", schoolname);
    expect(intern.schoolname).toEqual(schoolname);
  });

//test 15 getSchool() function for an intern
test('get schoolname for an intern from function', () => {
    const schoolname = "rockofages";;
    const intern = new Intern("Barefeet", 153 , "barefeet@flinstones.com", schoolname);
    expect(intern.getSchoolName()).toEqual(schoolname);
  });  

 //test 16 getRole() function for an intern
test('creates the role of intern from function', () => {
    const role = "Intern";
    const intern = new Intern("Gravel", 759 , "gravel@flinstones.com", "pebblepreschool");
    expect(intern.getRole()).toEqual(role);
  }); 