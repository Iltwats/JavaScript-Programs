let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';    // Updation of 2nd element of Array
console.log(groceryList);


//Difference between const and let assignment of array
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'  //changed the 0 index value of the array
console.log(condiments)
condiments = ['Mayo']       //assigned a new array overwriting the previous
console.log(condiments)
utensils[3] = 'Spoon'   //changed the last element but cannot reassign
console.log(utensils)

// Finding the length of the array

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)  //used .length function 