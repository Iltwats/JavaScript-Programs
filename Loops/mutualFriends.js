// Program to find mutual friends etween two friends

var bobsFollowers = ['Ahmad', 'Bill', 'Catie', 'Sheldon'];
var tinasFollowers = ['Amy', 'Bill', 'Sheldon'];
var mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
console.log(mutualFollowers.join())