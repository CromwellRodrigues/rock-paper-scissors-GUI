const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restartGame = document.getElementById("restart");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");


// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
rock.addEventListener("click", ()=> handlePlayerChoice("rock"));
paper.addEventListener("click", ()=> handlePlayerChoice("paper"));
scissors.addEventListener("click", ()=> handlePlayerChoice("scissors"));
restartGame.addEventListener("click", resetGame);

const choices = ["rock", "paper", "scissors"];



let computerScore = 0;
let playerScore = 0;


let winningScore = 5;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


function handlePlayerChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result)   
    
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    const resultDiv = document.getElementById("result");
    const line = document.createElement("p");
    line.textContent = `${result} Player : ${playerScore} Computer: ${computerScore}`;
    resultDiv.prepend(line); 
    updateScores();


    if (playerScore === winningScore || computerScore === winningScore) {
        const winnerLine = document.createElement("p");
        winnerLine.textContent = playerScore === winningScore ? "Congratulations! You won the game!" : 
        "Game Over! Better luck next time!";
        resultDiv.prepend(winnerLine);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

}






function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        
        return "It's a tie!";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
          console.log(playerScore);
           playerScore++;
           console.log(`Player Score: ${playerScore}`);
            return `You win!\n
            ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        }

    if ((computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")) {
           

            computerScore++;
            return `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
        }

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameRoundNumber = 0;
    gameOn = false;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    updateScores();
}

function updateScores() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}