const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai',   'Eskisehir',  'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  .forEach
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// .filter
const longCities = cities.filter(city => city.length > 7);

// .reduce
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// .map
const smallerNums = nums.map(num => num - 5);

// .every
nums.every(num => num < 0);
// OR nums.some(num => num < 0);
