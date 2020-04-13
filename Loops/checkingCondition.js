const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// .some returns true even if one element passes the condition

console.log(words.some(word => {
    return word.length < 6;
}));

// .filter checks every element for a particular condition
const interestingWords = words.filter((word) => {
    return word.length > 5
});


// .every returns true only if all consition passes the condition

console.log(interestingWords.every((word) => {
    return word.length > 5
}));
