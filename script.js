      const rock = document.querySelector("#rock");
      const paper = document.querySelector("#paper");
      const scissors = document.querySelector("#scissors");
      const humanCount = document.querySelector("#humanScore");
      const computerCount = document.querySelector("#computerScore");

      const results = document.querySelector("#results");

      let humanScore = 0;
      let computerScore = 0;

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

      function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        let result = "";

        if (humanChoice === computerChoice) {
          result = "Equal! Both win";
        } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
        ) {
          humanScore++;
          result = "🎉 You Win! 🎉";
        } else {
          computerScore++;
          result = "💻 Computer Won... 💻";
        }

        results.textContent = result;
        humanCount.textContent = humanScore;
        computerCount.textContent = computerScore;

        if (humanScore === 5 || computerScore === 5) {
          results.textContent =
            humanScore === 5
              ? "🎉 You won the game! 🎉"
              : "💻 Computer wins the game! 💻";
              humanScore = 0;
              computerScore= 0;
        }
      }

      rock.addEventListener("click", () => playRound("rock"));
      paper.addEventListener("click", () => playRound("rock"));
      scissors.addEventListener("click", () => playRound("rock"));