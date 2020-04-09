// while logic implementation
let counterTwo = 1;
while (counterTwo<=04) {
    console.log(counterTwo);
    counterTwo++;
}

const cards = ['diamond', 'spade', 'heart', 'club'];

// To print elements of Card untill you get spade.
let currentCard;
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}
