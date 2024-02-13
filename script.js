// 1.Use document.querySelector to select all the necessary elements and store them into variables.
const scoreHumanEl = document.querySelector(".score-human");
const scoreBotEl = document.querySelector(".score-bot");
const choiceHumanEl = document.querySelector(".choice-human");
const choiceBotEl = document.querySelector(".choice-bot");
const resultEl = document.querySelector(".result-current");
const rockEl = document.querySelector(".rock");
const paperEl = document.querySelector(".paper");
const scissorsEl = document.querySelector(".scissors");

let human = 0;
let robot = 0;
let result;

const getComputerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
};

const play = (humanPlay) => {
  const computerPlay = getComputerPlay();

  if (humanPlay === "rock") {
    if (computerPlay === "paper") {
      result = "Lost";
      robot++;
    } else if (computerPlay === "scissors") {
      result = "Won";
      human++;
    } else {
      result = "Tie";
    }
  } else if (humanPlay === "paper") {
    if (computerPlay === "rock") {
      result = "Won";
      human++;
    } else if (computerPlay === "scissors") {
      result = "Lost";
      robot++;
    } else {
      result = "Tie";
    }
  } else if (humanPlay === "scissors") {
    if (computerPlay === "rock") {
      result = "Lost";
      robot++;
    } else if (computerPlay === "paper") {
      result = "Won";
      human++;
    } else {
      result = "Tie";
    }
  } else {
    return false;
  }

  scoreHumanEl.textContent = human;
  scoreBotEl.textContent = robot;
  choiceHumanEl.textContent = humanPlay;
  choiceBotEl.textContent = computerPlay;
  resultEl.textContent = result;
};

rockEl.addEventListener("click", () => {
  play("rock");
});

paperEl.addEventListener("click", () => {
  play("paper");
});

scissorsEl.addEventListener("click", () => {
  play("scissors");
});
