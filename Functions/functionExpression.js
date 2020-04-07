// To define a function inside an expression, we can use the function keyword.
//  In a function expression, the function name is usually omitted. 
// A function with no name is called an anonymous function. 
// A function expression is often stored in a variable in order to refer to it.

//Program to check if the day is wednesday.
const plantNeedsWater=function(day){
  if(day==='Wednesday'){
    return true;
  }
  else
  return false;
}
console.log(plantNeedsWater('Tuesday'))