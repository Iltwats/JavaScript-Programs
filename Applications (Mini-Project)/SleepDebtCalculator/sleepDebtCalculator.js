const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 6;
            break;
        case 'friday':
            return 5;
            break;
        case 'saturday':
            return 6.5;
            break;
        case 'sunday':
            return 7;
            break;
        default:
            return 0;
            break;
    }
}
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

function getIdealSleepHours() {
    let idealHours = 6.5;
    return idealHours *= 7;
}
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());
function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of Sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more sleep than you should have!');
    } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}
calculateSleepDebt();