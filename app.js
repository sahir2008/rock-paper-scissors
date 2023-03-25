function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  switch (random) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return "Its a tie";
      case "paper":
        return "You Lose! Paper beats Rock";
      case "scissors":
        return "You Win! Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return "You Win! Paper beats Rock";
      case "paper":
        return "Its a tie";
      case "scissors":
        return "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        return "You Lose! Rock beats Scissors";
      case "paper":
        return "You Win! Scissors beats Paper";
      case "scissors":
        return "Its a tie";
    }
  } else {
    return "Did you spell that correctly ? please Enter 'rock' or 'paper' or 'scissors' exactly!";
  }
}

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const sicssorsBtn = document.createElement("button");
const container = document.createElement("div");
rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
sicssorsBtn.innerText = "Sicssors";
rockBtn.setAttribute("id", "rock");
paperBtn.setAttribute("id", "paper");
sicssorsBtn.setAttribute("id", "scissors");
container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(sicssorsBtn);
document.body.appendChild(container);



const buttons = document.querySelectorAll("button");
const resultContainer = document.createElement("div");
const result = document.createElement("h2");
const playerSelection = document.createElement("p");
const computerSelection = document.createElement("p");

let roundNum = 0;
let playerScore = 0;
let computerScore = 0;

const pScore = document.createElement("p");
const cScore = document.createElement("p");
const round = document.createElement("p");
cScore.innerText = `Computer Score: ${computerScore}`;
pScore.innerText = `Player Score: ${playerScore}`;
round.innerText = `Round : ${roundNum}`;
round.style.color = "red";
cScore.style.color = "blue";
pScore.style.color = "blue";
container.appendChild(round);
container.appendChild(pScore);
container.appendChild(cScore);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let pcChoice = getComputerChoice();
    let playerChoice = e.target.id;
    let resultMsg = playRound(playerChoice, pcChoice);
    playerSelection.innerText = `Player Choose : ${playerChoice}`;
    computerSelection.innerText = `Computer Choose: ${pcChoice}`;
    result.innerText = resultMsg;
    resultContainer.appendChild(result);
    resultContainer.appendChild(playerSelection);
    resultContainer.appendChild(computerSelection);
    container.appendChild(resultContainer);

    if (resultMsg.includes("Win")) {
      ++playerScore;
      pScore.innerText = `Player Score: ${playerScore}`;
    } else if (resultMsg.includes("Lose!")) {
      ++computerScore;
      cScore.innerText = `Computer Score: ${computerScore}`;
    }
    roundNum++;
    round.innerText = `Round : ${roundNum}`;
    if (playerScore === 5) {
      const playerWins = document.createElement("h1");
      playerWins.innerText = "Player is The Winner Winner Chicken Dinner";
      playerWins.style.color = "green";
      container.appendChild(playerWins);
      clearResult(playerWins);
    } else if (computerScore === 5) {
      const copWins = document.createElement("h1");
      copWins.innerText = "Computer is the winner!";
      copWins.style.color = "red";
      container.appendChild(copWins);
      clearResult(copWins);
    }
  });
});

// Helper Function
function clearResult(playerOrCop) {
  setTimeout(() => {
    playerScore = 0;
    computerScore = 0;
    roundNum = 0;
    container.removeChild(playerOrCop);
    container.removeChild(resultContainer);
    pScore.innerText = `Player Score: ${playerScore}`;
    cScore.innerText = `Computer Score: ${computerScore}`;
    round.innerText = `Round : ${roundNum}`;
  }, 2000);
}
