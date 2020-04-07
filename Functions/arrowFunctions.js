const plantNeedsWater = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}
console.log(plantNeedsWater('Wednesday'));

//refractored to be concise the previous function in one line, applicable only to functions with one parameter.
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};
console.log(Math.floor(rectangleArea(5.4,3)));      //Math.floor() to round of result.

