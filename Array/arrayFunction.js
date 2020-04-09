//Editing the array by passing argument to a function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement(newArr) {
    newArr.pop()
}
removeElement(concept)
console.log(concept)
