//processes user input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else
        console.log('Wrong Choice!')

}
//Processes computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper'
    } else if (choice === 2) {
        return 'scissors'
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It`s a Tie'
    } 
    {
         if (userChoice === 'rock') 
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        } 
        if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return 'The computer won!';
            } else {
                return 'You won!';
            }
        } if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'The computer won!';
            } else {
                return 'You won!';
            }
        }
    }
    
}

// console.log(determineWinner('paper', 'scissors'));       // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper'));          // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock'));           // prints something like 'The user won!'
// The above method is aldo fine but it can be done in a better way.
const playGame = () => {
        const userChoice = getUserChoice('paper');
        const computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('The computer threw:' + computerChoice);

        console.log(determineWinner(userChoice, computerChoice));
};

playGame(); 