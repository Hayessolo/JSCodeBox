// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase(); // Make playerSelection case-insensitive

    if (playerSelection === computerSelection) {
        displayResult("It's a tie!");
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

// Function to display the result
function displayResult(resultText) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = resultText;
}

// Event listeners for player's choice buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
