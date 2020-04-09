// Program to check to same elements of array
const myArray = [6, 19, 20];
const yourArray = [19, 81, 6];
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < yourArray.length; j++) {
        if (myArray[i] === yourArray[j]) {
            console.log('Both loops have the number: ' + yourArray[j])
        }
    
    }
};
