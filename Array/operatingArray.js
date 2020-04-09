//  .push() referred to as a destructive array method since it changes the initial array.

const chore = ['wash dishes', 'do laundry', 'take out trash'];

chore.push('clean house', 'wash the car'); //pushed 2 new elements to the array
console.log(chore);

//  .pop(), removes the last item of an array.

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
const remove = chores.pop() //assigned the revoved variable to a new variable remove.
console.log(chores)
console.log(remove) //logging the removed variable to the console

//  .shift(), remove from the front of an Array

let fruits = ['Apple', 'Banana','Orange']
let first = fruits.shift() // remove Apple from the front, now [Banana] is first.
console.log(fruits);
console.log(first); //removed element

//  .unshift(), Add to the front of an Array

let newLength = fruits.unshift('Strawberry') // add to the front of Array
console.log(newLength)

// .indexOf(), Find the index of an item in the Array

fruits.push('Mango')        // ["Strawberry", "Banana",'Orange',"Mango"]
let pos = fruits.indexOf('Banana')  //it tells position of that element in array
console.log(pos)
console.log(fruits)

// .splice(pos,n), Remove an item by index position
//  n defines the number of items to be removed, starting at the index position specified by pos and progressing toward the end of array.

let removedItem = fruits.splice(pos, 1) 
console.log(fruits);

// .slice(first,last+1), returns a shallow copy of a portion of an array into a new array object selected from begin to end.button

console.log(fruits.slice(1,2))      //orange will be created to a new array
console.log(fruits)     //original array remains intact


