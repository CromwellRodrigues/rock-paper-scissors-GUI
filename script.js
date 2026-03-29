const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
rock.addEventListener("click", ()=> handlePlayerChoice("rock"));
paper.addEventListener("click", ()=> handlePlayerChoice("paper"));
scissors.addEventListener("click", ()=> handlePlayerChoice("scissors"));

const choices = ["rock", "paper", "scissors"];



let computerScore = 0;
let playerScore = 0;
let gameRoundNumber = 0;
let gameOn = false
let winningScore = 5;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const computerSelection = getComputerChoice();
console.log(computerSelection);


function handlePlayerChoice(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

   
    
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    const resultDiv = document.getElementById("result");
    const line = document.createElement("p");
    line.textContent = `${result} Player : ${playerScore} Computer: ${computerScore}`;
    resultDiv.prepend(line); 


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


