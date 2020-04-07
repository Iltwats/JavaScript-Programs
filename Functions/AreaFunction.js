function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
const area=rectangleArea(6,4);
console.log(area+' is the area of the shape');