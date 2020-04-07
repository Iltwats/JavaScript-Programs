let wordCount = 34; //has been assigned non falsy value

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}
/*Below condition has been assigned falsy value.It includes
        1.0
        2."" or''
        3.null
        4.undefined(when a variable lacks a value)
        5.NaN or Not a Number
*/

let favoritePhrase = 'ASH';   

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

/* Another way to write the above code is short-circuit evaluation.
let favoritePhrase = '';
let check=favoritePhrase || 'String empty';
console.log(check);
*/
