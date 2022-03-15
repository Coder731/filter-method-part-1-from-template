  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

// actual filter here:
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === "Paul")[0];
console.log(paul);


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];


// reccommended if have a complex filter (to use callbacks (written first and then passed into complex filter function))
const has5yearsExp = skill => skill.yrsExperience >= 5; // second callback function (to be called by original callback function)
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0; // callback function
const candidates = students.filter(hasStrongSkills); // pass callback function into filter method
console.log(candidates);
// attempt at challenge
// challenge: use const names = candidates.map(???) to return only candidates names;
// const names = candidates.map(students[(for (var i in students[i]){/*return object */}].name);