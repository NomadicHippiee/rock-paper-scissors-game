let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "rock"
    } else if (computerChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?")
    return humanChoice.toLowerCase();

}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Equal! Both win")
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win!")
    } else {
        console.log("Computer Won...")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



console.log(playRound(humanSelection, computerSelection))
console.log(computerSelection)




