//Take a phrase and translate it into its “whale talk” equivalent:
//There are a few simple rules for translating text to whale language:
//  1.There are no consonants.Only vowels.
//  2.The u‘ s and e‘ s are extra long, so we must double them in our program.

let input = 'We Will, We will Rock You';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++)
 {
    for (let j = 0; j < vowels.length; j++) 
    {
        if (input[i] === vowels[j])
         {
            if (input[i] === "e")
            {
                resultArray.push('ee');
            } else if (input[i] === "u") 
            {
                resultArray.push('uu');
            } else 
            {
                resultArray.push(input[i]);
            }
        }
    }
}
//Resulting array should be upperCase and without any space before printing.
console.log(resultArray.join('').toUpperCase())        