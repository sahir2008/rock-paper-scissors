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

function game() {
  let roundNum = 0;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt(
      "PLease Enter 'rock' or 'paper or 'scissors':"
    ).toLocaleLowerCase();
    roundNum++;
    if (playRound(playerChoice, getComputerChoice()).includes("Win")) {
      ++playerScore;
    } else if (playRound(playerChoice, getComputerChoice()).includes("Lose!")) {
      ++computerScore;
    }

    console.log("player Score is : " + playerScore);
    console.log("COP Score is : " + computerScore);
  }
  if (playerScore > computerScore) {
    console.log("Player is The Winner Winner Chicken Dinner");
  } else if (playerScore < computerScore) {
    console.log("Computer is the winner!");
  } else {
    console.log("Its a Draw game");
  }
}
game();
