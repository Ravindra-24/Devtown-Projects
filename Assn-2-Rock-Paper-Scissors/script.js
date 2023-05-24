// const Rock = 0;
// const Paper = 1;
// const Scissors = 2;

const choices = ["Rock", "Paper", "Scissors"];

const genrateRandomChoice = () => (Math.random() * 10).toFixed(0) % 3;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const messageBox = document.querySelector(".message-box");

let playerScoreContainer = 0,
  computerScoreContainer = 0;

rock.addEventListener("click", () => game(0));
paper.addEventListener("click", () => game(1));
scissor.addEventListener("click", () => game(2));

const game = (option) => {
  const computerChoice = genrateRandomChoice();
  switch (option) {
    case 0:
      switch (computerChoice) {
        case 0:
          messageBox.innerHTML = "Its a tie !";
          messageBox.style = "color: #7c1515";
          break;
        case 1:
          messageBox.innerHTML = `${paper.innerHTML} beats ${rock.innerHTML}, Computer Win...!!!`;
          rock.classList.add("lose");
          setTimeout(() => {
            rock.classList.remove("lose");
          }, 1000);
          messageBox.style = "color: #41304d";
          computerScoreContainer++;
          computerScore.innerHTML = computerScoreContainer;
          break;
        case 2:
          messageBox.innerHTML = `${rock.innerHTML} beats ${scissor.innerHTML}, Player Win...!!!`;
          rock.classList.add("win");
          setTimeout(() => {
            rock.classList.remove("win");
          }, 1000);
          messageBox.style = "color: #00ff00";
          playerScoreContainer++;
          playerScore.innerHTML = playerScoreContainer;
          break;
        default:
          break;
      }
      break;
    case 1:
      switch (computerChoice) {
        case 0:
          messageBox.innerHTML =`${paper.innerHTML} beats ${rock.innerHTML}, Player Win...!`;
          paper.classList.add("win");
          setTimeout(() => {
            paper.classList.remove("win");
          }, 1000);
          messageBox.style = "color: #00ff00";
          playerScoreContainer++;
          playerScore.innerHTML = playerScoreContainer;
          break;
        case 1:
          messageBox.innerHTML = "Its a tie !";
          messageBox.style = "color: #7c1515";
          break;
        case 2:
          messageBox.innerHTML =`${scissor.innerHTML} beats ${paper.innerHTML}, Computer Win...!`;
          paper.classList.add("lose");
          setTimeout(() => {
            paper.classList.remove("lose");
          }, 1000);
          messageBox.style = "color: #41304d";
          computerScoreContainer++;
          computerScore.innerHTML = computerScoreContainer;
          break;
        default:
          break;
      }
      break;
    case 2:
      switch (computerChoice) {
        case 0:
          messageBox.innerHTML =`${rock.innerHTML} beats ${scissor.innerHTML}, Computer Win...!`;
          scissor.classList.add("lose");
          setTimeout(() => {
            scissor.classList.remove("lose");
          }, 1000);
          messageBox.style = "color: #41304d";
          computerScoreContainer++;
          computerScore.innerHTML = computerScoreContainer;
          break;
        case 1:
          messageBox.innerHTML =`${scissor.innerHTML} beats ${paper.innerHTML}, Player Win...!`;
          scissor.classList.add("win");
          setTimeout(() => {
            scissor.classList.remove("win");
          }, 1000);
          messageBox.style = "color: #00ff00";
          playerScoreContainer++;
          playerScore.innerHTML = playerScoreContainer;
          break;
        case 2:
          messageBox.innerHTML = "Its a tie !";
          messageBox.style = "color: #7c1515";
          break;
        default:
          break;
      }
      break;

    default:
      break;
  }
};
