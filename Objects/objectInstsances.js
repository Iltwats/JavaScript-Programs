const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// Use of .keys()
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Use of .entries()
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Use of .assign()
const newRobot = Object.assign({
    laserBlaster: true,
    voiceRecognition: true
}, robot)

console.log(newRobot);