// map filter and reduce

const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

const arr = [];
officers.forEach((officer) => {
  arr.push(officer.id);
});

console.log(arr);

// todo: Using the map function which takes 2 arguments, a callback and an optional context
const officerIds = officers.map(function (officer) {
  return officer.id;
});
const officerIds2 = officers.map((officer) => officer.id);
console.log(officerIds);

// todo: Using the reduce function
const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

// todo: Arrow functions return a single line
const totalYears = pilots.reduce((acc, pilot) => {
  return acc + pilot.years;
}, 0);

const mostExpPilot = pilots.reduce((oldest, pilot) => {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

console.log(totalYears);
console.log(mostExpPilot);

// todo: Using filter, only want some elements in it
var pilots2 = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

const rebels = pilots2.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels);

// todo: Combining everything together
const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// filters out the people that are force users
var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});

var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);

// combine into a single liner
const totalJediScore = personnel
  .filter((person) => person.isForceUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(jediPersonnel);
