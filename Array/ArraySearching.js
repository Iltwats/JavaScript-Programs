//finding elements greater than index of b
const values=['a','b','c','d','e'];
const set=values.filter(function(item){
    console.log('item:', item);
    return item>'b';

});
console.log(set)
console.log('--------')
//Printing array greater than length 1
const val=['a','bbb','c','d','e'];
const found=val.find(function(item){
    return item.length>1;
});
console.log(found);
console.log('--------')


//Printing all the elements without use of loop
const arr = ['a', 'b', 'c'];
arr.forEach(function(item){
    console.log(item);
})
