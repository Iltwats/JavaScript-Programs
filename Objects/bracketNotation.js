let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';        //accessing the single quoted object.


const isActive = spaceship[propName];
console.log(isActive);