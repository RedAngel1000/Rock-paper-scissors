function getComputerChoice(num) {
    if(num <= .33) {
        return 'Rock'
    } else if (num <= .66) {
        return 'Paper';
    } else {
        return 'Scissors'
    }

}

function getHumanChoice(choice) {
    return choice;
}



let humanScore = 0;
let computerScore = 0;


function playGame() {


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toUpperCase() == 'ROCK' && computerChoice == 'Rock') {
        console.log('Its a tie! Play again!')
        counter--
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else  if (humanChoice.toUpperCase() == 'PAPER' && computerChoice == 'Paper') {
        console.log('Its a tie! Play again!')
        counter--
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else  if (humanChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'Scissors') {
        console.log('Its a tie! Play again!')
        counter--
        console.log('Player:' + humanScore +  ' Computer:' + computerScore);
    } else if (humanChoice.toUpperCase() == 'ROCK' && computerChoice == 'Paper') {
        computerScore++;
        console.log('You lose! Paper beats Rock')
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else if (humanChoice.toUpperCase() == 'ROCK' && computerChoice == 'Scissors') {
        humanScore++;
        console.log('You Win! Rock beats Scissors')
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else if (humanChoice.toUpperCase() == 'PAPER' && computerChoice == 'Rock') {
        humanScore++;
        console.log('You Win! Paper beats Rock')
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else if (humanChoice.toUpperCase() == 'PAPER' && computerChoice == 'Scissors') {
        computerScore++;
        console.log('You lose! Scissors beats Paper')
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else if (humanChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'Rock') {
        computerScore++;
        console.log('You lose! Rock beats Scissors')
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    } else if (humanChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'Paper') {
        humanScore++;
        console.log('You Win! Scissors beats Paper')
        console.log('Player:' + humanScore + ' Computer:' + computerScore);
    }
}
const humanSelection = getHumanChoice(prompt());
const computerSelection = getComputerChoice(Math.random());
playRound(humanSelection, computerSelection);
}
let counter = 0;
while (counter < 5) {
    playGame();
    counter++;
}

if (humanScore > computerScore) {
    console.log('The Player Wins!')
} else {
    console.log('The Computer Wins');
}