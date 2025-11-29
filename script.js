function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors?");
  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Equal! Both win";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
      return "You Win!";
    } else {
        computerScore++;
      return "Computer Won...";
    }
  }


const result1 = playRound(getHumanChoice(), getComputerChoice());
console.log("Round 1: ", result1);

const result2 = playRound(getHumanChoice(), getComputerChoice());
console.log("Round 2: ", result2);

const result3 = playRound(getHumanChoice(), getComputerChoice());
console.log("Round 3: ", result3);

const result4 = playRound(getHumanChoice(), getComputerChoice());
console.log("Round 4: ", result4);

const result5 = playRound(getHumanChoice(), getComputerChoice());
console.log("Round 5: ", result5);

if (humanScore > computerScore) {
    console.log("Final Result: You are the champion!");

} else if (computerScore > humanScore) {
    console.log("Final Result: Computer wins the game!");
  } else {
    console.log("Final Result: It's a tie overall!");
  }

}

playGame();
