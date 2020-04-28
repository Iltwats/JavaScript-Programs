let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',    // fuel type is in qoutes becuse it has spaces in it.
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount=spaceship.numCrew;
const planetArray=spaceship.flightPath;

console.log(crewCount);
console.log(planetArray);
