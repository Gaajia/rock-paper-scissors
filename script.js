let computerChoice = "";
let userChoice = "";
let score = 0;

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

let resultDisplay = document.getElementById("result");

function playRound(userChoice) {
    let compChoices = ['rock', 'paper', 'scissors'];
    computerChoice = compChoices[Math.floor(Math.random() * compChoices.length)];

    let resultMessage = 
        userChoice === computerChoice ? "It's a tie!" :
        userChoice === 'rock' ? (computerChoice === 'scissors' ? 'You win! Rock beats Scissors.' : 'You lose! Paper beats Rock.') :
        userChoice === 'paper' ? (computerChoice === 'rock' ? 'You win! Paper beats Rock.' : 'You lose! Scissors beats Paper.') :
        userChoice === 'scissors' ? (computerChoice === 'paper' ? 'You win! Scissors beats Paper.' : 'You lose! Rock beats Scissors.') :
        '';

    if (resultMessage.includes('win')) {
        score++;
    } else if (resultMessage.includes('lose')) {
        score--;
    }

    resultDisplay.textContent = resultMessage;
    document.getElementById("score").textContent = `Score: ${score}`;



        
}
