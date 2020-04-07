//  logic for an app that will give runners information on race day!
let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistered = true;    //shift between true and false
let runnerAge = 18;     //change the values
if (runnerAge > 18 && runnerRegistered === true) {
    raceNumber += 1000;
}


if (runnerAge > 18 && runnerRegistered === true) {
    console.log(`Your racetime is 9:30 am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && runnerRegistered === false) {
    console.log(`Your racetime is 11:00 am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Your racetime is 12:30 pm and your race number is ${raceNumber}.`);
} else {
    console.log('Please see the registration desk!')
}